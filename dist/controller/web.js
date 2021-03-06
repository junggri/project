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
var refreshtoken_1 = __importDefault(require("../lib/refreshtoken"));
var crypto_1 = __importDefault(require("crypto"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var moment_1 = __importDefault(require("moment"));
var mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
var crypto_json_1 = __importDefault(require("../config/crypto.json"));
var csurf_1 = __importDefault(require("csurf"));
var nodeMailer_1 = __importDefault(require("../lib/nodeMailer"));
var mailer_json_1 = __importDefault(require("../config/mailer.json"));
var body_parser_1 = __importDefault(require("body-parser"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var sanitize_html_1 = __importDefault(require("sanitize-html"));
var registerSymModel_1 = __importDefault(require("../model/schema/registerSymModel"));
var userContoller_1 = __importDefault(require("../model/controller/userContoller"));
var registerSymptonContoller_1 = __importDefault(require("../model/controller/registerSymptonContoller"));
var provideController_1 = __importDefault(require("../model/controller/provideController"));
var submitController_1 = __importDefault(require("../model/controller/submitController"));
var usermodel_1 = __importDefault(require("../model/schema/usermodel"));
var authStatus_1 = __importDefault(require("../lib/authStatus"));
var getDataFromToken_1 = __importDefault(require("../lib/getDataFromToken"));
var symptonList_1 = require("../lib/symptonList");
var multer_1 = require("../lib/multer");
var jwtverify_1 = require("../lib/jwtverify");
var accesstoken_1 = require("../lib/accesstoken");
var deleteImg_1 = __importDefault(require("../lib/deleteImg"));
var sendPhone_1 = __importDefault(require("../lib/sendPhone"));
var mypageState_1 = require("../lib/mypageState");
var symptonList_2 = require("../lib/symptonList");
var nocache_1 = __importDefault(require("nocache"));
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
function makeStorage(decoded) {
    var _dir = path_1.default.join(path_1.default.join(path_1.default.join(__dirname + ("/../../upload/" + decoded.user_objectId))));
    if (!fs_1.default.existsSync(_dir))
        fs_1.default.mkdirSync(_dir);
}
router.get("/index", csrfProtection, jwtverify_1.verify, function (req, res, next) {
    var authUI = authStatus_1.default.status(req, res);
    res.render("index", { authUI: authUI });
});
router.get("/estimate", jwtverify_1.verify, csrfProtection, function (req, res, next) {
    var authUI = authStatus_1.default.status(req, res);
    if (req.session.code !== undefined)
        delete req.session.code;
    if (req.session.img !== undefined)
        delete req.session.img;
    symptonList_2.symptonList().then(function (result) {
        res.render("estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result });
    });
});
router.get("/login", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res, next) {
    req.headers.referer === undefined ? (req.session.referer = "http://localhost:3000/web/index") : (req.session.referer = req.headers.referer);
    req.session.save(function () {
        res.render("login", { csrfToken: req.csrfToken() });
    });
});
router.post("/users/login", parseForm, csrfProtection, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _email, _pwd, result, userObjectId_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _email = mongo_sanitize_1.default(req.body.email);
                _pwd = mongo_sanitize_1.default(req.body.pwd);
                return [4 /*yield*/, usermodel_1.default.findOne({ email: _email })];
            case 1:
                result = _a.sent();
                try {
                    if (result === null) {
                        res.status(200).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
                    }
                    else {
                        userObjectId_1 = result._id;
                        crypto_1.default.pbkdf2(_pwd, result.salt, crypto_json_1.default.num, crypto_json_1.default.len, crypto_json_1.default.sys, function (err, key) {
                            if (key.toString("base64") === result.password) {
                                accesstoken_1.createToken(req, res, _email, result.name, result._id);
                                var _refresh_token = refreshtoken_1.default(req, res, _email, result.name, result._id);
                                var save_token = result.refresh_token;
                                if (save_token === undefined || save_token === "") {
                                    userContoller_1.default.tokenUpdate(req, res, _email, _refresh_token, userObjectId_1);
                                    return res.status(200).json({ url: req.session.referer, state: true });
                                }
                                else {
                                    try {
                                        jsonwebtoken_1.default.verify(save_token, process.env.JWT_SECRET);
                                        return res.status(200).json({ url: req.session.referer, state: true });
                                    }
                                    catch (error) {
                                        if (error.name === "TokenExpiredError") {
                                            userContoller_1.default.tokenUpdate(req, res, _email, _refresh_token, userObjectId_1);
                                            return res.status(200).json({ url: req.session.referer, state: true });
                                        }
                                    }
                                }
                            }
                            else {
                                res.status(200).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
                            }
                        });
                    }
                }
                catch (error) {
                    console.log(2);
                    console.error(error);
                }
                return [2 /*return*/];
        }
    });
}); });
router.get("/register/previous", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    res.render("registerprevious");
});
router.get("/register/:way", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    req.params.way === "common" ? res.render("common", { csrfToken: req.csrfToken() }) : res.render("provide", { csrfToken: req.csrfToken() });
});
router.post("/register/common/process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res, next) {
    var inputdata = {};
    var _a = req.body, common_email = _a.common_email, common_name = _a.common_name, common_pwd = _a.common_pwd;
    crypto_1.default.randomBytes(crypto_json_1.default.len, function (err, buf) {
        var salt = buf.toString("base64");
        var time = moment_1.default().format("YYYY-MM-DD");
        crypto_1.default.pbkdf2(common_pwd, salt, crypto_json_1.default.num, crypto_json_1.default.len, crypto_json_1.default.sys, function (err, key) { return __awaiter(void 0, void 0, void 0, function () {
            var Users, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inputdata = {
                            email: common_email,
                            password: key.toString("base64"),
                            name: common_name,
                            salt: salt,
                            createdAt: time,
                        };
                        Users = new usermodel_1.default(inputdata);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Users.save()];
                    case 2:
                        _a.sent();
                        res.redirect("/web/index");
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        // let err = new Error("등록오류 입니다.");
                        // next(err);
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    });
});
router.post("/register/provide/process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var inputdata, _a, name, gender, email, pwd, phone, lat1, lon1, address1, lat2, lon2, address2, lat3, lon3, address3;
    return __generator(this, function (_b) {
        inputdata = {};
        _a = req.body, name = _a.name, gender = _a.gender, email = _a.email, pwd = _a.pwd, phone = _a.phone, lat1 = _a.lat1, lon1 = _a.lon1, address1 = _a.address1, lat2 = _a.lat2, lon2 = _a.lon2, address2 = _a.address2, lat3 = _a.lat3, lon3 = _a.lon3, address3 = _a.address3;
        crypto_1.default.randomBytes(crypto_json_1.default.len, function (err, buf) {
            var salt = buf.toString("base64");
            crypto_1.default.pbkdf2(pwd, salt, crypto_json_1.default.num, crypto_json_1.default.len, crypto_json_1.default.sys, function (err, key) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    inputdata = {
                        email: email,
                        password: key.toString("base64"),
                        name: name,
                        gender: gender,
                        phone_number: phone,
                        salt: salt,
                        address: { add1: { address: address1, lat: lat1, lon: lon1 }, add2: { address: address2, lat: lat2, lon: lon2 }, add3: { address: address3, lat: lat3, lon: lon3 } },
                    };
                    try {
                        provideController_1.default.save(inputdata);
                        return [2 /*return*/, res.redirect("/provide/index")];
                    }
                    catch (error) {
                        console.error(error);
                    }
                    return [2 /*return*/];
                });
            }); });
        });
        return [2 /*return*/];
    });
}); });
router.get("/check/duplicate/:email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var responseData, user, provideResult, randomArray, i, randomNum, mailOption, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                responseData = null;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, usermodel_1.default.find({ email: req.params.email })];
            case 2:
                user = _a.sent();
                return [4 /*yield*/, provideController_1.default.find(req.params.email)];
            case 3:
                provideResult = _a.sent();
                if (user.length === 0 && provideResult.length === 0) {
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
                res.status(200).json(responseData);
                return [3 /*break*/, 5];
            case 4:
                error_2 = _a.sent();
                console.error(error_2);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
router.get("/check/provider/duplicate/:email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userResult, provideResult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, userContoller_1.default.find(req.params.email)];
            case 1:
                userResult = _a.sent();
                return [4 /*yield*/, provideController_1.default.find(req.params.email)];
            case 2:
                provideResult = _a.sent();
                if (userResult.length === 0 && provideResult.length === 0) {
                    return [2 /*return*/, res.status(200).json({ state: true })];
                }
                else {
                    return [2 /*return*/, res.status(200).json({ state: false })];
                }
                return [2 /*return*/];
        }
    });
}); });
router.get("/user/check/login", parseForm, csrfProtection, function (req, res) {
    var token = req.cookies.jwttoken;
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({ state: true });
    }
    catch (error) {
        return res.status(401).json({ state: false });
    }
});
router.get("/write/sympton", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var code, authUI, decoded, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                code = req.query.code;
                authUI = authStatus_1.default.status(req, res);
                decoded = getDataFromToken_1.default(req, res);
                makeStorage(decoded);
                return [4 /*yield*/, symptonList_1.selcted_sympton(code)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, res.render("get-estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result, price: req.session.price })];
        }
    });
}); });
router.get("/users/session", parseForm, csrfProtection, jwtverify_1.verify, function (req, res) {
    var decoded = getDataFromToken_1.default(req, res);
    req.session.img === undefined || req.session.img.length === 0 ? res.status(200).json({ state: false }) : res.status(200).json({ img: req.session.img, userdata: decoded });
});
router.post("/delete/session/img", parseForm, csrfProtection, jwtverify_1.verify, function (req, res) {
    req.session.img.splice(req.session.img.indexOf(req.body._data), 1);
    return res.status(200).json(req.session.img);
});
router.post("/add/session/img", jwtverify_1.verify, function (req, res, next) {
    var decoded = getDataFromToken_1.default(req, res);
    req.session.img = [];
    multer_1.upload(req, res, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.json({ img: req.session.img, userdata: decoded });
    });
});
router.post("/add/session/img/more", jwtverify_1.verify, function (req, res, next) {
    var decoded = getDataFromToken_1.default(req, res);
    multer_1.reupload(req, res, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.json({ img: req.session.img, userdata: decoded });
    });
});
router.post("/register/users/sympton", parseForm, csrfProtection, jwtverify_1.verify, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token, _a, sympton_detail, time, minute, postcode, roadAddress, userwant_content, price, sigungu, bname, bname1, lat, lon, _b, code, img, sigunguCode, _time, detailAddress, decoded_1, inputdata_1;
    return __generator(this, function (_c) {
        token = req.cookies.jwttoken;
        _a = req.body, sympton_detail = _a.sympton_detail, time = _a.time, minute = _a.minute, postcode = _a.postcode, roadAddress = _a.roadAddress, userwant_content = _a.userwant_content, price = _a.price, sigungu = _a.sigungu, bname = _a.bname, bname1 = _a.bname1, lat = _a.lat, lon = _a.lon;
        _b = req.session, code = _b.code, img = _b.img;
        sigunguCode = String(req.body.sigunguCode).substr(0, 2);
        _time = moment_1.default().format("YYYY-MM-DD");
        detailAddress = sanitize_html_1.default(req.body.detailAddress);
        try {
            decoded_1 = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            inputdata_1 = {
                user_name: decoded_1.username,
                user_object_id: decoded_1.user_objectId,
                email: decoded_1.email,
                code: code,
                sympton_detail: sanitize_html_1.default(sympton_detail),
                img: img,
                userwant_time: { time: time, minute: minute },
                address: { postcode: postcode, sigunguCode: sigunguCode, sigungu: sigungu, bname: bname, bname1: bname1, roadAddress: roadAddress, detailAddress: detailAddress, lat: lat, lon: lon },
                userwant_content: sanitize_html_1.default(userwant_content),
                predict_price: price,
                createdAt: _time,
            };
            delete req.session.img;
            delete req.session.code;
            delete req.session.price;
            req.session.save(function () { return __awaiter(void 0, void 0, void 0, function () {
                var sentProvidersArray;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, registerSymptonContoller_1.default.sendToProvider(lat, lon)];
                        case 1:
                            sentProvidersArray = _a.sent();
                            return [4 /*yield*/, registerSymptonContoller_1.default.save(inputdata_1, decoded_1.email, decoded_1.user_objectId, sentProvidersArray)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, deleteImg_1.default(decoded_1.email, decoded_1.user_objectId)];
                        case 3:
                            _a.sent();
                            res.redirect("/web/mypage");
                            return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (error) {
            console.error(error);
        }
        return [2 /*return*/];
    });
}); });
//isnotlogined
router.get("/mypage", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) {
    var decoded = getDataFromToken_1.default(req, res);
    var authUI = authStatus_1.default.status(req, res);
    makeStorage(decoded);
    // let _dir2 = path.join(path.join(path.join(__dirname + `/../../upload/${(decoded as Decoded).user_objectId}/user_img`)));
    // if (!fs.existsSync(_dir2)) fs.mkdirSync(_dir2);
    res.render("mypage", { authUI: authUI, csrfToken: req.csrfToken(), username: decoded.username, useremail: decoded.email });
});
router.get("/mypage/showestimate", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, nocache_1.default(), function (req, res) {
    try {
        var decoded = getDataFromToken_1.default(req, res);
        registerSymptonContoller_1.default.findAllRegister(req, res, decoded.email, decoded.user_objectId);
    }
    catch (error) {
        console.error(error, "로그인이 되지 않았습니다.");
    }
});
router.delete("/delete/sympton", parseForm, csrfProtection, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var decoded, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                decoded = getDataFromToken_1.default(req, res);
                return [4 /*yield*/, registerSymptonContoller_1.default.deleteSympton(req, res, decoded.email, decoded.user_objectId)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.error(error_3, "로그인이 되지 않았습니다.");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get("/find/:symptons/provider", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, isSubmited;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitController_1.default.findAllProvider(req.params.symptons)];
            case 1:
                result = _a.sent();
                if (!(result.length === 0)) return [3 /*break*/, 2];
                return [2 /*return*/, res.status(200).json({ state: false })];
            case 2: return [4 /*yield*/, submitController_1.default.isSubmited(req.params.symptons)];
            case 3:
                isSubmited = _a.sent();
                if (isSubmited.state === "accept")
                    return [2 /*return*/, res.json({ state: "accept" })];
                return [2 /*return*/, res.status(200).json({ data: result, state: true })];
        }
    });
}); });
router.get("/data/submit/:submitid", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var acceptData, symptonData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitController_1.default.getProviderData(req.params.submitid)];
            case 1:
                acceptData = _a.sent();
                return [4 /*yield*/, registerSymModel_1.default.findOne({ _id: acceptData.symptonId })];
            case 2:
                symptonData = _a.sent();
                acceptData === null ? res.status(200).json({ state: false }) : res.status(200).json({ state: true, submit: acceptData, register: symptonData });
                return [2 /*return*/];
        }
    });
}); });
router.get("/show/providers/:id", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var authUI, result, listLen, list;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                authUI = authStatus_1.default.status(req, res);
                return [4 /*yield*/, submitController_1.default.findAllProvider(req.params.id)];
            case 1:
                result = _a.sent();
                listLen = "\uCD1D " + result.length + "\uC758 \uACAC\uC801\uC744 \uD655\uC778\uD574\uBCF4\uC138\uC694.";
                return [4 /*yield*/, mypageState_1.makeSumbitbox(result)];
            case 2:
                list = _a.sent();
                res.render("mypageShowProvider", { authUI: authUI, csrfToken: req.csrfToken(), len: listLen, submit_list: list });
                return [2 /*return*/];
        }
    });
}); });
router.get("/check/reigister/state/:registerid", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, registerSymptonContoller_1.default.find(req.params.registerid)];
            case 1:
                result = _a.sent();
                if (result.state == "register") {
                    res.status(200).json({ state: true });
                }
                else {
                    res.status(200).json({ state: false });
                }
                return [2 /*return*/];
        }
    });
}); });
router.get("/find/providers/submit/:submitid", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitController_1.default.findSubmit(req.params.submitid)];
            case 1:
                result = _a.sent();
                if (result === null) {
                    return [2 /*return*/, res.json({ state: false })];
                }
                else {
                    res.status(200).json({ state: true, data: result });
                }
                return [2 /*return*/];
        }
    });
}); });
router.post("/acception/submit", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, provide_phone_number;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, submitController_1.default.getProviderData(req.body.submit_id)];
            case 1:
                result = _a.sent();
                return [4 /*yield*/, submitController_1.default.acceptSubmit(req.body.submit_id, result.symptonId)];
            case 2:
                _a.sent();
                provide_phone_number = result.provider[0].phone_number;
                sendPhone_1.default(res, "acception", provide_phone_number);
                return [2 /*return*/];
        }
    });
}); });
router.get("/modifiment/estimate/:id", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var response, err, authUI, codeList, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, registerSymptonContoller_1.default.findBeforeModified(req, res)];
            case 1:
                response = _a.sent();
                if (response === null) {
                    err = new Error("잘못된 접근입니다");
                    err.message = "잘못된 접근입니다.";
                    err.stack = "삭제된 증상입니다";
                    err.status = 404;
                    next(err);
                    return [2 /*return*/];
                }
                authUI = authStatus_1.default.status(req, res);
                return [4 /*yield*/, symptonList_1.selcted_sympton(response.code)];
            case 2:
                codeList = _a.sent();
                req.session._id = req.url.split("/")[3];
                //수정할때 필요한 Id값
                res.render("modified_estimate", { authUI: authUI, csrfToken: req.csrfToken(), register_symptons: codeList });
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                console.log(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
router.get("/data/modify/:id", jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var decoded, response, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                req.session.img = [];
                decoded = getDataFromToken_1.default(req, res);
                return [4 /*yield*/, registerSymptonContoller_1.default.findImageBeforeModified(req, res)];
            case 1:
                response = _a.sent();
                if (response === null)
                    return [2 /*return*/, res.json({ state: false })];
                for (i = 0; i < response.img.length; i++) {
                    req.session.img.push(response.img[i]);
                }
                res.status(200).json({ response: response, email: decoded, img: req.session.img });
                return [2 /*return*/];
        }
    });
}); });
router.post("/modify/delete/session/img", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) {
    req.session.img.splice(req.session.img.indexOf(req.body.data), 1);
    res.json(req.session.img);
});
router.post("/modify/session/img", jwtverify_1.verify, function (req, res, next) {
    var decoded = getDataFromToken_1.default(req, res);
    multer_1.modifiedUpload(req, res, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.json({ img: req.session.img, email: decoded });
    });
});
router.post("/modify/session/img/more", jwtverify_1.verify, function (req, res, next) {
    var decoded = getDataFromToken_1.default(req, res);
    multer_1.modifiedReupload(req, res, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        res.json({ img: req.session.img, email: decoded });
    });
});
router.post("/modified/estimate/process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, function (req, res) {
    var decoded = getDataFromToken_1.default(req, res);
    var _a = req.body, sympton_detail = _a.sympton_detail, time = _a.time, minute = _a.minute, postcode = _a.postcode, roadAddress = _a.roadAddress, userwant_content = _a.userwant_content, sigungu = _a.sigungu, bname = _a.bname, bname1 = _a.bname1, lat = _a.lat, lon = _a.lon;
    var sigunguCode = String(req.body.sigunguCode).substr(0, 2);
    var detailAddress = sanitize_html_1.default(req.body.detailAddress);
    var data = {
        sympton_detail: sanitize_html_1.default(sympton_detail),
        time: time,
        minute: minute,
        img: req.session.img,
        postcode: postcode,
        sigunguCode: sigunguCode,
        sigungu: sigungu,
        bname: bname,
        bname1: bname1,
        roadAddress: roadAddress,
        detailAddress: detailAddress,
        lat: lat,
        lon: lon,
        userwant_content: sanitize_html_1.default(userwant_content),
    };
    registerSymptonContoller_1.default.modified(req, res, data);
    delete req.session.img;
    delete req.session.code;
    delete req.session._id;
    req.session.save(function () {
        deleteImg_1.default(decoded.email, decoded.user_objectId);
        return res.redirect("/web/mypage");
    });
});
router.get("/verify/phone/number/:number", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, function (req, res) {
    sendPhone_1.default(res, "authorization", req.params.number);
});
router.post("/logout", jwtverify_1.isNotLogined, function (req, res) {
    res.clearCookie("jwttoken", { path: "/web" });
    return res.redirect(req.get("Referrer"));
});
exports.default = router;
//# sourceMappingURL=web.js.map