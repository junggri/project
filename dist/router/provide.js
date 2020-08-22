"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var csurf_1 = __importDefault(require("csurf"));
var p_authStatus_1 = __importDefault(require("../lib/p_authStatus"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var p_verify_1 = require("../lib/p_verify");
var p_accesstoken_1 = require("../lib/p_accesstoken");
var p_refreshtoken_1 = __importDefault(require("../lib/p_refreshtoken"));
var mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
var crypto_1 = __importDefault(require("crypto"));
var crypto_json_1 = __importDefault(require("../config/crypto.json"));
var provideModel_1 = __importDefault(require("../lib/model/provideModel"));
var provideController_1 = __importDefault(require("../lib/controller/provideController"));
var mysql_1 = __importDefault(require("../lib/mysql"));
var querystring_1 = __importDefault(require("querystring"));
var p_makeJuso_1 = require("../lib/p_makeJuso");
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
router.get("/index", csrfProtection, p_verify_1.verify, p_verify_1.isLogined, function (req, res) {
    if (req.headers.referer === undefined) {
        req.session.referer = "http://localhost:3000/provide/index";
    }
    else {
        req.session.referer = "http://localhost:3000/provide/findAllRegister";
    }
    res.render("providers/index", { csrfToken: req.csrfToken() });
});
router.post("/login_process", parseForm, csrfProtection, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _email, _pwd, result, userObjectId_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _email = mongo_sanitize_1.default(req.body.email);
                _pwd = mongo_sanitize_1.default(req.body.pwd);
                return [4 /*yield*/, provideModel_1.default.findOne({ email: { $in: [_email] } })];
            case 1:
                result = _a.sent();
                //보안이라는데;;흠;;;
                // let result: any = await providers.findOne({ email: _email });
                try {
                    if (result === null) {
                        res.json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
                    }
                    else {
                        userObjectId_1 = result._id;
                        crypto_1.default.pbkdf2(_pwd, result.salt, crypto_json_1.default.num, crypto_json_1.default.len, crypto_json_1.default.sys, function (err, key) {
                            if (key.toString("base64") === result.password) {
                                //오케이 로그인 성공했어
                                p_accesstoken_1.createToken(req, res, _email, result.name, result._id);
                                var _refresh_token = p_refreshtoken_1.default(req, res, _email, result.name, result._id);
                                var save_token = result.refresh_token;
                                if (save_token === undefined) {
                                    provideController_1.default.tokenUpdate(req, res, _email, _refresh_token, userObjectId_1);
                                    return res.json({ url: "http://localhost:3000/provide/findAllRegister", state: true });
                                }
                                else {
                                    try {
                                        console.log("리프래쉬 토큰이 있어요");
                                        jsonwebtoken_1.default.verify(save_token, process.env.JWT_SECRET);
                                        return res.json({ url: "http://localhost:3000/provide/findAllRegister", state: true });
                                    }
                                    catch (error) {
                                        if (error.name === "TokenExpiredError") {
                                            console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                                            provideController_1.default.tokenUpdate(req, res, _email, _refresh_token, userObjectId_1);
                                            return res.json({ url: "http://localhost:3000/provide/findAllRegister", state: true });
                                        }
                                    }
                                }
                            }
                            else {
                                res.json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
                            }
                        });
                    }
                }
                catch (error) {
                    console.error(error);
                }
                return [2 /*return*/];
        }
    });
}); });
router.get("/findAllRegister", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authUI;
    return __generator(this, function (_a) {
        authUI = p_authStatus_1.default.status(req, res);
        if (querystring_1.default.parse(req.url).sigunguCode !== undefined && querystring_1.default.parse(req.url).sigunguCode !== "0") {
            p_makeJuso_1.makeJuso(req, res, authUI);
        }
        else {
            res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken(), list: "", list2: "" });
        }
        return [2 /*return*/];
    });
}); });
router.get("/selected_and_find", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, function (req, res) {
    var authUI = p_authStatus_1.default.status(req, res);
    res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken() });
});
router.post("/get_sigungu", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, function (req, res) {
    if (req.body.data === "")
        return;
    mysql_1.default.query("select \uC2DC\uAD70\uAD6C\uBA85 from " + req.body.data, function (err, data) {
        var data1 = [];
        if (err)
            console.error(err);
        for (var i = 0; i < data.length; i++) {
            data1.push(data[i].시군구명);
        }
        res.json({ sido: Array.from(new Set(data1)).sort() });
    });
});
router.post("/get_bname", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, function (req, res) {
    if (req.body.data.sigungu === "")
        return;
    mysql_1.default.query("select * from " + req.body.data.sido + " where \uC2DC\uAD70\uAD6C\uBA85 = \"" + req.body.data.sigungu + "\"", function (err, data) {
        var data1 = [];
        if (err)
            console.error(err);
        for (var i = 0; i < data.length; i++) {
            data1.push(data[i].법정읍면동명);
        }
        res.json({ sido: Array.from(new Set(data1)).sort() });
    });
});
router.post("/get_sejong", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, function (req, res) {
    if (req.body.data === "")
        return;
    mysql_1.default.query("select * from " + req.body.data, function (err, data) {
        var data1 = [];
        if (err)
            console.error(err);
        for (var i = 0; i < data.length; i++) {
            data1.push(data[i].법정읍면동명);
        }
        res.json({ sido: Array.from(new Set(data1)).sort() });
    });
});
exports.default = router;
//# sourceMappingURL=provide.js.map