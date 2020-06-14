"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.verify = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var refreshtoken_1 = __importDefault(require("./refreshtoken"));
var accesstoken_1 = require("./accesstoken");
function verify(req, res, next) {
    var token = req.cookies.jwttoken || req.cookies.jwttoken2;
    var refresh_token = req.cookies.refreshtoken;
    console.log(refreshtoken_1.default);
    try {
        req.docoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return next();
    }
    catch (error) {
        console.log(error);
        if (!token) {
            return res.status(403).json({
                code: 403,
                message: "로그인되지 않았습니다.",
            });
        }
        if (error.name === "TokenExpiredError") {
            if (refresh_token) {
                res.clearCookie("jwttoken");
                accesstoken_1.createToken2(req, res);
                if (refresh_token) {
                    res.redirect("/auth/check");
                }
                else {
                    refreshtoken_1.default(req, res);
                    res.redirect("/auth/check");
                }
                //여기서 다시 토큰을 발급하고 다시하기
            }
            //refreshtoken 있다면 access token 재발급 없다면 다시 로그인하게
            // return res.status(419).json({
            //   code: 419,
            //   message: "토큰이 만료되었습니다.",
            // });
        }
        return res.status(401).json({
            code: 401,
            message: "유효하지 않은 토큰입니다",
        });
    }
}
exports.verify = verify;
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect("/login");
    }
}
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=jwtverify.js.map