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
var p_authStatus_1 = __importDefault(require("../lib/p_authStatus"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var p_accesstoken_1 = require("../lib/p_accesstoken");
var p_refreshtoken_1 = __importDefault(require("../lib/p_refreshtoken"));
var mongo_sanitize_1 = __importDefault(require("mongo-sanitize"));
var crypto_1 = __importDefault(require("crypto"));
var crypto_json_1 = __importDefault(require("../config/crypto.json"));
var provideModel_1 = __importDefault(require("../db/schema/provideModel"));
var provideModel_2 = __importDefault(require("../db/model/provideModel"));
var providerGotModel_1 = __importDefault(require("../db/model/providerGotModel"));
var registerSymptonModel_1 = __importDefault(require("../db/model/registerSymptonModel"));
var submitModel_1 = __importDefault(require("../db/model/submitModel"));
var p_MakeSymptonList_1 = require("../lib/p_MakeSymptonList");
var p_makeShowData_1 = require("../lib/p_makeShowData");
var mysql_jusoLIst_1 = __importDefault(require("../lib/mysql-jusoLIst"));
var querystring_1 = __importDefault(require("querystring"));
var p_makeJuso_1 = require("../lib/p_makeJuso");
var providerController = {
    main: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.headers.referer === undefined) {
                    req.session.referer = "http://localhost:3000/provide/main";
                }
                else {
                    req.session.referer = "http://localhost:3000/provide/show/items";
                }
                req.session.save(function () {
                    res.render("providers/main", { csrfToken: req.csrfToken() });
                });
                return [2 /*return*/];
            });
        });
    },
    loginProcess: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _email, _pwd, result, userObjectId_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _email = mongo_sanitize_1.default(req.body.email);
                        _pwd = mongo_sanitize_1.default(req.body.pwd);
                        return [4 /*yield*/, provideModel_1.default.findOne({ email: { $in: [_email] } })];
                    case 1:
                        result = _a.sent();
                        try {
                            if (result === null) {
                                res.status(401).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
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
                                            provideModel_2.default.tokenUpdate(req, res, _email, _refresh_token, userObjectId_1);
                                            return res.status(200).json({ url: "http://localhost:3000/provide/show/items", state: true });
                                        }
                                        else {
                                            try {
                                                console.log("리프래쉬 토큰이 있어요");
                                                jsonwebtoken_1.default.verify(save_token, process.env.JWT_SECRET);
                                                return res.status(200).json({ url: "http://localhost:3000/provide/show/items", state: true });
                                            }
                                            catch (error) {
                                                if (error.name === "TokenExpiredError") {
                                                    console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                                                    provideModel_2.default.tokenUpdate(req, res, _email, _refresh_token, userObjectId_1);
                                                    return res.status(200).json({ url: "http://localhost:3000/provide/show/items", state: true });
                                                }
                                            }
                                        }
                                    }
                                    else {
                                        res.status(401).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
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
        });
    },
    showItems: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var authUI, pageNum, divided_num, data, allData, _AllSympton, pagination, data, allData, _AllSympton, pagination;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authUI = p_authStatus_1.default.status(req, res);
                        divided_num = 15;
                        querystring_1.default.parse(req.url).page === undefined ? (pageNum = 1) : (pageNum = querystring_1.default.parse(req.url).page);
                        if (!(querystring_1.default.parse(req.url).sigunguCode !== undefined && querystring_1.default.parse(req.url).sigunguCode !== "0")) return [3 /*break*/, 3];
                        return [4 /*yield*/, registerSymptonModel_1.default.getSpecificData(pageNum, querystring_1.default.parse(req.url).sigunguCode, querystring_1.default.parse(req.url).sigungu, querystring_1.default.parse(req.url).bname, divided_num)];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, registerSymptonModel_1.default.makeSpecificPagination(pageNum, querystring_1.default.parse(req.url).sigunguCode, querystring_1.default.parse(req.url).sigungu, querystring_1.default.parse(req.url).bname, divided_num)];
                    case 2:
                        allData = _a.sent();
                        _AllSympton = p_MakeSymptonList_1.MakeAllSymptonList(data, pageNum, divided_num);
                        pagination = p_MakeSymptonList_1.MakePagination(req, res, allData, divided_num);
                        p_makeJuso_1.makeJuso(req, res, authUI, _AllSympton, pagination);
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, registerSymptonModel_1.default.getAllData(pageNum, divided_num)];
                    case 4:
                        data = _a.sent();
                        return [4 /*yield*/, registerSymptonModel_1.default.makePagination()];
                    case 5:
                        allData = _a.sent();
                        _AllSympton = p_MakeSymptonList_1.MakeAllSymptonList(data, pageNum, divided_num);
                        pagination = p_MakeSymptonList_1.MakePagination(req, res, allData, divided_num);
                        res.render("providers/show-item", { authUI: authUI, csrfToken: req.csrfToken(), list: "", list2: "", AllSympton: _AllSympton, pagination: pagination });
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    },
    getSigungu: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.params.data === "")
                    return [2 /*return*/];
                mysql_jusoLIst_1.default.query("select \uC2DC\uAD70\uAD6C\uBA85 from " + req.params.data, function (err, data) {
                    var data1 = [];
                    if (err)
                        console.error(err);
                    for (var i = 0; i < data.length; i++) {
                        data1.push(data[i].시군구명);
                    }
                    res.json({ sido: Array.from(new Set(data1)).sort() });
                });
                return [2 /*return*/];
            });
        });
    },
    getBname: function (req, res) {
        if (req.params.sigungu === "")
            return;
        mysql_jusoLIst_1.default.query("select * from " + req.params.sido + " where \uC2DC\uAD70\uAD6C\uBA85 = \"" + req.params.sigungu + "\"", function (err, data) {
            var data1 = [];
            if (err)
                console.error(err);
            for (var i = 0; i < data.length; i++) {
                data1.push(data[i].법정읍면동명);
            }
            res.json({ sido: Array.from(new Set(data1)).sort() });
        });
    },
    getSejong: function (req, res) {
        if (req.params.data === "")
            return;
        mysql_jusoLIst_1.default.query("select * from " + req.params.data, function (err, data) {
            var data1 = [];
            if (err)
                console.error(err);
            for (var i = 0; i < data.length; i++) {
                data1.push(data[i].법정읍면동명);
            }
            res.json({ sido: Array.from(new Set(data1)).sort() });
        });
    },
    checkStateRegisterState: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, registerSymptonModel_1.default.showBeforeEstimate(req.params.registerId)];
                    case 1:
                        result = _a.sent();
                        if (result === null) {
                            return [2 /*return*/, res.json({ state: false })];
                        }
                        else if (result.state === "accept") {
                            return [2 /*return*/, res.json({ state: "accept" })];
                        }
                        else {
                            res.json({ data: result, state: true });
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    symptonEstimate: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var authUI, token, decoded, result, err, isEstimated, location_1, imgs, btn, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authUI = p_authStatus_1.default.status(req, res);
                        token = req.cookies.pjwttoken;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                        return [4 /*yield*/, registerSymptonModel_1.default.showBeforeEstimate(req.url.split("?")[1])];
                    case 2:
                        result = _a.sent();
                        // let submitState = await submitController.getState(req.url.split("?")[1], (decoded as Decoded).user_objectId);
                        if (result === null) {
                            err = new Error("잘못된 접근입니다");
                            err.message = "잘못된 접근입니다.";
                            err.stack = "삭제된 증상입니다";
                            err.status = 404;
                            next(err);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, provideModel_2.default.isEstimated(decoded.user_objectId)];
                    case 3:
                        isEstimated = _a.sent();
                        location_1 = p_makeShowData_1.makeLocation(result);
                        imgs = p_makeShowData_1.makeImg(result);
                        btn = p_makeShowData_1.makeBtn(isEstimated, req.url.split("?")[1]);
                        res.render("providers/before-estimate", { authUI: authUI, csrfToken: req.csrfToken(), Location: location_1, imgs: imgs, btn: btn });
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error(error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    getRegisterData: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, registerSymptonModel_1.default.showBeforeEstimate(req.params.registerId)];
                    case 1:
                        result = _a.sent();
                        if (result === null)
                            return [2 /*return*/, res.json({ state: false })];
                        res.json({ state: true, data: result });
                        return [2 /*return*/];
                }
            });
        });
    },
    submitEstimate: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, decoded, submit, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = req.cookies.pjwttoken;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                        return [4 /*yield*/, registerSymptonModel_1.default.isFullSubmit(req.body)];
                    case 2:
                        submit = _a.sent();
                        if (submit === null)
                            return [2 /*return*/, res.json({ state: null })];
                        if (submit.provider.length >= 20)
                            return [2 /*return*/, res.json({ state: false })];
                        return [4 /*yield*/, submitModel_1.default.save(req.body.sympton_id, decoded.user_objectId, req.body)];
                    case 3:
                        _a.sent();
                        res.json({ state: true, url: req.body.sympton_id });
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error(error_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    },
    deleteSubmit: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var token, decoded, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = req.cookies.pjwttoken;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                        return [4 /*yield*/, registerSymptonModel_1.default.showBeforeEstimate(req.body.symptonId)];
                    case 2:
                        result = _a.sent();
                        if (result === null)
                            return [2 /*return*/, res.json({ state: null })];
                        submitModel_1.default.delete_submit(req, res, req.body.symptonId, decoded.user_objectId);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        console.error(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    mypage: function (req, res) {
        var authUI = p_authStatus_1.default.status(req, res);
        var token = req.cookies.pjwttoken;
        var decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        try {
            res.render("providers/mypage", { authUI: authUI, csrfToken: req.csrfToken(), username: decoded.username, useremail: decoded.email });
        }
        catch (error) { }
    },
    showSubmit: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, authUI, decoded, data, list, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = req.cookies.pjwttoken;
                        authUI = p_authStatus_1.default.status(req, res);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                        return [4 /*yield*/, submitModel_1.default.getDataFromProviderId(decoded.user_objectId)];
                    case 2:
                        data = _a.sent();
                        list = p_MakeSymptonList_1.showSubmitList(data);
                        res.render("providers/show-submit", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    showSubmitFlag: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, submitModel_1.default.findSubmit(req.params.submitId)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [2 /*return*/, res.json({ state: result.state, symptonId: result.symptonId })];
                }
            });
        });
    },
    showGotEstimate: function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var token, authUI, decoded, data, list, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = req.cookies.pjwttoken;
                        authUI = p_authStatus_1.default.status(req, res);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
                        return [4 /*yield*/, providerGotModel_1.default.findProvider(decoded.user_objectId)];
                    case 2:
                        data = _a.sent();
                        list = p_MakeSymptonList_1.showGottList(data);
                        res.render("providers/user-send", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
                        return [3 /*break*/, 4];
                    case 3:
                        error_5 = _a.sent();
                        console.error(error_5);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    logout: function (req, res) {
        res.clearCookie("pjwttoken", { path: "/provide" });
        return res.redirect(req.get("Referrer"));
    },
};
exports.default = providerController;
//# sourceMappingURL=providerController.js.map