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
var jwtverify_1 = require("../lib/jwtverify");
var csurf_1 = __importDefault(require("csurf"));
var authStatus_1 = __importDefault(require("../lib/authStatus"));
var userContoller_1 = __importDefault(require("../lib/controller/userContoller"));
var provideController_1 = __importDefault(require("../lib/controller/provideController"));
var setAndGetCookie_1 = require("../lib/setAndGetCookie");
var body_parser_1 = __importDefault(require("body-parser"));
var nodeMailer_1 = __importDefault(require("../lib/nodeMailer"));
var crypto_1 = __importDefault(require("crypto"));
var mailer_json_1 = __importDefault(require("../config/mailer.json"));
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var csrfProtection = csurf_1.default({ cookie: true });
var router = express_1.default.Router();
router.get("/find_user_email", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    var authUI = authStatus_1.default.status(req, res);
    return res.render("findUserEmail", { authUI: authUI, csrfToken: req.csrfToken() });
});
router.get("/find_user_pwd", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    var authUI = authStatus_1.default.status(req, res);
    return res.render("findUserPwd", { authUI: authUI, csrfToken: req.csrfToken() });
});
router.post("/check_user_email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userContoller_1.default.find(req.body.email)];
            case 1:
                result = _a.sent();
                if (result.length === 0) {
                    //회원정보가 존재하지 않습니다.
                    return [2 /*return*/, res.json({ state: false, inputdata: req.body.email })];
                }
                else {
                    return [2 /*return*/, res.json({ state: true, email: result[0].email })];
                }
                return [2 /*return*/];
        }
    });
}); });
router.post("/check_provide_email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userResult, provideResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userContoller_1.default.find(req.body.email)];
            case 1:
                userResult = _a.sent();
                return [4 /*yield*/, provideController_1.default.find(req.body.email)];
            case 2:
                provideResult = _a.sent();
                if (userResult.length === 0 && provideResult.length === 0) {
                    //중복된 이메일이 존재하지 않는다는 것
                    return [2 /*return*/, res.json({ state: true })];
                }
                else {
                    return [2 /*return*/, res.json({ state: false })];
                }
                return [2 /*return*/];
        }
    });
}); });
router.post("/check_user_and_sendEmail", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var encryptResult, result, token, mailOption;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                encryptResult = setAndGetCookie_1.encrypt(req.body.email);
                return [4 /*yield*/, userContoller_1.default.find(req.body.email)];
            case 1:
                result = _a.sent();
                token = crypto_1.default.randomBytes(20).toString("hex");
                mailOption = {
                    from: mailer_json_1.default.email,
                    to: req.body.email,
                    subject: "비밀번호 재설정 링크입니다..",
                    html: "\uBE44\uBC00\uBC88\uD638 \uCD08\uAE30\uD654\uB97C \uC704\uD558\uC5EC \uC544\uB798\uC758 \uB9C1\uD06C\uB97C \uD074\uB9AD\uD574\uC8FC\uC138\uC694 \n          <a href=\"http://localhost:3000/v1/reset?reto=" + token + "&email=" + encryptResult + "\">\uBE44\uBC00\uBC88\uD638 \uCD08\uAE30\uD654</a>",
                };
                if (result.length === 0) {
                    return [2 /*return*/, res.json({ state: false, inputdata: req.body.email })];
                }
                else {
                    res.cookie("rs_to", token, { httpOnly: true, expires: new Date(Date.now() + 60000 * 5) });
                    nodeMailer_1.default(mailOption);
                    return [2 /*return*/, res.json({ state: "can-reset" })];
                }
                return [2 /*return*/];
        }
    });
}); });
router.get("/reset", csrfProtection, jwtverify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var decryptResult;
    return __generator(this, function (_a) {
        decryptResult = setAndGetCookie_1.decrypt(req.query.email);
        if (req.cookies.rs_to === req.query.reto) {
            res.render("reset", { csrfToken: req.csrfToken(), email: decryptResult });
        }
        else {
            return [2 /*return*/, res.status(400).send("잘못된 접근입니다.").end()];
        }
        return [2 /*return*/];
    });
}); });
router.post("/reset_process", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res.clearCookie("rs_to");
                return [4 /*yield*/, userContoller_1.default.resetPassword(req, res)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
exports.default = router;
//# sourceMappingURL=v1.js.map