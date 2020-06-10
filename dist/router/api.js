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
var express_1 = __importDefault(require("express"));
var jwtverify_1 = require("../lib/jwtverify");
var crypto_1 = __importDefault(require("crypto"));
var userinfo_1 = __importDefault(require("../lib/model/userinfo"));
var mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
var crypto_json_1 = __importDefault(require("../config/crypto.json"));
var router = express_1.default.Router();
// router.use("/", verify);
router.get("/check", jwtverify_1.verify, function (req, res) {
    res.json(req.docoded);
});
//토큰값은 쿠키ㅔㅇ 저장한다
router.post("/login_process", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _email, _pwd, Users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _email = mongo_sanitize_1.default(req.body.login_email);
                _pwd = mongo_sanitize_1.default(req.body.login_pwd);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, userinfo_1.default.findOne({
                        email: { $in: [_email] },
                        password: { $in: [_pwd] },
                    })];
            case 2:
                Users = _a.sent();
                console.log(Users);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get("/register/:way", function (req, res) {
    req.params.way === "common" ? res.render("common") : res.render("provide");
});
router.post("/register_common_process", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, common_email, common_name, common_pwd, Users, user, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, common_email = _a.common_email, common_name = _a.common_name, common_pwd = _a.common_pwd;
                crypto_1.default.randomBytes(crypto_json_1.default.len, function (err, buf) {
                    var salt = buf.toString("base64");
                });
                Users = new userinfo_1.default({
                    email: common_email,
                    password: common_pwd,
                    name: common_name,
                });
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Users.save()];
            case 2:
                user = _b.sent();
                console.log(user);
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                console.error(error_2);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/check_email", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var responseData, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                responseData = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, userinfo_1.default.find({ email: req.body.email })];
            case 2:
                user = _a.sent();
                console.log(user.length);
                if (user.length === 0) {
                    responseData = { state: "true", msg: "사용가능한 이메일입니다." };
                }
                else {
                    responseData = { state: "false", msg: "이미 사용중인 이메일입니다" };
                }
                res.json(responseData);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.json(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
module.exports = router;
//# sourceMappingURL=api.js.map