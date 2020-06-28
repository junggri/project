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
var accesstoken_1 = require("../lib/accesstoken");
var refreshtoken_1 = __importDefault(require("../lib/refreshtoken"));
var crypto_1 = __importDefault(require("crypto"));
var mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
var crypto_json_1 = __importDefault(require("../config/crypto.json"));
var csurf_1 = __importDefault(require("csurf"));
var nodeMailer_1 = __importDefault(require("../lib/nodeMailer"));
var mailer_json_1 = __importDefault(require("../config/mailer.json"));
var body_parser_1 = __importDefault(require("body-parser"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var userContoller_1 = __importDefault(require("../lib/controller/userContoller"));
var registerSympton_1 = __importDefault(require("../lib/model/registerSympton"));
var usermodel_1 = __importDefault(require("../lib/model/usermodel"));
var authStatus_1 = __importDefault(require("../lib/authStatus"));
var symptonList_1 = require("../lib/symptonList");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var multer_1 = require("../lib/multer");
var csrfProtection = csurf_1.default({ cookie: true });
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
// router.use("/", verify);
//모든 라우트 마다 로그인//로그인 안했을때 처리
//토큰값은 쿠키ㅔㅇ 저장한다
router.get("/login", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    console.log(req.session);
    res.render("login", { csrfToken: req.csrfToken(), msg: "" });
});
router.post("/login_process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _email, _pwd, result_1, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _email = mongo_sanitize_1.default(req.body.login_email);
                _pwd = mongo_sanitize_1.default(req.body.login_pwd);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usermodel_1.default.findOne({ email: { $in: [_email] } })];
            case 2:
                result_1 = _a.sent();
                if (result_1 === null) {
                    return [2 /*return*/, res.render("login", {
                            csrfToken: req.csrfToken(),
                            msg: "등록되지 않은 이메일이거나 잘못된 이메일입니다.",
                        })];
                }
                else {
                    crypto_1.default.pbkdf2(_pwd, result_1.salt, crypto_json_1.default.num, crypto_json_1.default.len, crypto_json_1.default.sys, function (err, key) {
                        if (key.toString("base64") === result_1.password) {
                            //오케이 로그인 성공했어
                            accesstoken_1.createToken(req, res, _email, result_1.name);
                            var _refresh_token_1 = refreshtoken_1.default(req, res, _email, result_1.name);
                            var save_token_1 = result_1.refresh_token;
                            //로그인했으니까 리프레쉬 토큰 있나 확인해볼게
                            if (save_token_1 === undefined) {
                                //없네 오키 발급해줄게
                                userContoller_1.default.tokenUpdate(req, res, _email, _refresh_token_1);
                            }
                            else {
                                //있깄있는데 너가 유효한지 확인해볼게
                                var validation_refreshToken = new Promise(function (resolve, reject) {
                                    try {
                                        var validation_token = jsonwebtoken_1.default.verify(save_token_1, process.env.JWT_SECRET);
                                        resolve(validation_token);
                                    }
                                    catch (error) {
                                        reject(error);
                                    }
                                });
                                validation_refreshToken
                                    //야 유효하니까 새로발급안하고 로그인해도 되겠다
                                    .then(function () {
                                    console.log("토큰이 유효해요");
                                    res.redirect("/");
                                })
                                    .catch(function (err) {
                                    if (err.name === "TokenExpiredError") {
                                        //있긴있는데 유효하지가 않아서 재발금을 해야겠네ㄴ
                                        console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                                        userContoller_1.default.tokenUpdate(req, res, _email, _refresh_token_1);
                                    }
                                });
                            }
                        }
                        else {
                            return res.render("login", {
                                csrfToken: req.csrfToken(),
                                msg: "비밀번호가 일치하지 않습니다.",
                            });
                        }
                    });
                }
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get("/register_previous", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    res.render("registerprevious");
});
router.get("/register/:way", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    req.params.way === "common" ? res.render("common", { csrfToken: req.csrfToken() }) : res.render("provide", { csrfToken: req.csrfToken() });
});
router.post("/register_common_process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res, next) {
    var _a = req.body, common_email = _a.common_email, common_name = _a.common_name, common_pwd = _a.common_pwd;
    var inputdata;
    crypto_1.default.randomBytes(crypto_json_1.default.len, function (err, buf) {
        var salt = buf.toString("base64");
        crypto_1.default.pbkdf2(common_pwd, salt, crypto_json_1.default.num, crypto_json_1.default.len, crypto_json_1.default.sys, function (err, key) { return __awaiter(void 0, void 0, void 0, function () {
            var Users, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputdata = {
                            email: common_email,
                            password: key.toString("base64"),
                            name: common_name,
                            salt: salt,
                        };
                        Users = new usermodel_1.default(inputdata);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Users.save()];
                    case 2:
                        _a.sent();
                        res.redirect("/");
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        // let err = new Error("등록오류 입니다.");
                        // next(err);
                        console.error(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });
});
router.post("/check_email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var responseData, user, randomArray, i, randomNum, mailOption, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                responseData = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usermodel_1.default.find({ email: req.body.email })];
            case 2:
                user = _a.sent();
                if (user.length === 0) {
                    randomArray = [];
                    for (i = 0; i < 6; i++) {
                        randomNum = Math.floor(Math.random() * 10);
                        randomArray.push(randomNum);
                    }
                    mailOption = {
                        from: mailer_json_1.default.email,
                        to: req.body.email,
                        subject: "인증을 위한 메일입니다.",
                        html: "<h1>\uC778\uC99D\uBC88\uD638\uB294 " + randomArray.join("") + " \uC785\uB2C8\uB2E4.</h1>",
                    };
                    responseData = {
                        state: "true",
                        msg: " ",
                        validation_num: randomArray.join(""),
                    };
                    nodeMailer_1.default(mailOption);
                }
                else {
                    responseData = { state: "false", msg: "이미 사용중인 이메일입니다" };
                }
                res.json(responseData);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.post("/pre_estimate", parseForm, csrfProtection, function (req, res) {
    var token = req.cookies.jwttoken;
    var sympton_code = req.body.sort(function (a, b) {
        return a - b;
    });
    req.session.code = sympton_code;
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        res.json({ state: true });
    }
    catch (error) {
        res.json({ state: false });
    }
});
//isnotlogined
router.get("/get_estimate", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) {
    var authUI = authStatus_1.default.status(req, res);
    var code = req.session.code;
    var list = symptonList_1.selcted_sympton(code);
    res.render("get_estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
});
router.post("/delete_session_img", parseForm, csrfProtection, jwtverify_1.verify, function (req, res) {
    var imgPath = path_1.default.join(__dirname, "../../upload");
    fs_1.default.unlink(imgPath + "/" + req.body.data, function (err) {
        if (err)
            console.error(err);
        req.session.img.splice(req.session.img.indexOf(req.body.data), 1);
        res.json(req.session.img);
    });
});
router.post("/fetch_session", parseForm, csrfProtection, jwtverify_1.verify, function (req, res) {
    console.log(req.session);
    req.session.img === undefined || req.session.img.length === 0 ? res.json({ state: false }) : res.json(req.session.img);
});
router.post("/fetch_upload_image", jwtverify_1.verify, function (req, res, next) {
    req.session.img = [];
    multer_1.upload(req, res, function (err) {
        if (err) {
            console.error(err);
            req.session.img = [];
            res.json({ state: false });
            return;
        }
        res.json(req.session.img);
    });
});
router.post("/fetch_add_upload_image", jwtverify_1.verify, function (req, res, next) {
    multer_1.reupload(req, res, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.json(req.session.img);
    });
});
router.post("/register_estimate_process", parseForm, csrfProtection, jwtverify_1.verify, function (req, res) {
    console.log(req.body, req.session);
    var registerSympton = new registerSympton_1.default();
});
router.get("/mypage", jwtverify_1.verify, function (req, res) { });
exports.default = router;
//# sourceMappingURL=api.js.map