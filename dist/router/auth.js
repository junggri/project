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
var passport_1 = __importDefault(require("../lib/passport"));
var express_1 = __importDefault(require("express"));
var passportController_1 = __importDefault(require("../lib/controller/passportController"));
var accesstoken_1 = require("../lib/accesstoken");
var refreshtoken_1 = __importDefault(require("../lib/refreshtoken"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var router = express_1.default.Router();
router.get("/google", passport_1.default.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/userinfo.email"],
}));
router.get("/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/",
}), function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _refresh_token_1, save_token_1, validation_refreshToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, passportController_1.default.find(req.user._json.email)];
                case 1:
                    result = _a.sent();
                    if (result === null) {
                        return [2 /*return*/, res.redirect("/api/oauth_register")];
                    }
                    else {
                        accesstoken_1.createToken(req, res, req.user._json.email, result.name);
                        _refresh_token_1 = refreshtoken_1.default(req, res, req.user._json.email, result.name);
                        save_token_1 = result._refresh_token;
                        if (save_token_1 === undefined) {
                            passportController_1.default.tokenUpdate(req, res, req.user._json.email, _refresh_token_1);
                        }
                        else {
                            validation_refreshToken = new Promise(function (resolve, reject) {
                                try {
                                    var validation_token = jsonwebtoken_1.default.verify(save_token_1, process.env.JWT_SECRET);
                                    resolve(validation_token);
                                }
                                catch (error) {
                                    reject(error);
                                }
                            });
                            validation_refreshToken
                                .then(function () {
                                console.log("토큰이 유효해요");
                                return res.redirect("/");
                            })
                                .catch(function (err) {
                                if (err.name === "TokenExpiredError") {
                                    console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                                    passportController_1.default.tokenUpdate(req, res, req.user._json.email, _refresh_token_1);
                                }
                            });
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
});
router.get("/naver", passport_1.default.authenticate("naver"));
router.get("/naver/callback", passport_1.default.authenticate("naver", {
    failureRedirect: "/auth/login",
}), function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result, _refresh_token_2, save_token_2, validation_refreshToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, passportController_1.default.find(req.user._json.email)];
                case 1:
                    result = _a.sent();
                    if (result === null) {
                        return [2 /*return*/, res.redirect("/api/oauth_register")];
                    }
                    else {
                        accesstoken_1.createToken(req, res, req.user._json.email, result.name);
                        _refresh_token_2 = refreshtoken_1.default(req, res, req.user._json.email, result.name);
                        save_token_2 = result._refresh_token;
                        if (save_token_2 === undefined) {
                            passportController_1.default.tokenUpdate(req, res, req.user._json.email, _refresh_token_2);
                        }
                        else {
                            validation_refreshToken = new Promise(function (resolve, reject) {
                                try {
                                    var validation_token = jsonwebtoken_1.default.verify(save_token_2, process.env.JWT_SECRET);
                                    resolve(validation_token);
                                }
                                catch (error) {
                                    reject(error);
                                }
                            });
                            validation_refreshToken
                                .then(function () {
                                console.log("토큰이 유효해요");
                                return res.redirect("/");
                            })
                                .catch(function (err) {
                                if (err.name === "TokenExpiredError") {
                                    console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                                    passportController_1.default.tokenUpdate(req, res, req.user._json.email, _refresh_token_2);
                                }
                            });
                        }
                    }
                    return [2 /*return*/];
            }
        });
    });
});
router.get("/kakao", passport_1.default.authenticate("kakao"));
router.get("/kakao/callback", passport_1.default.authenticate("kakao", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
}), function (req, res) { });
exports.default = router;
//# sourceMappingURL=auth.js.map