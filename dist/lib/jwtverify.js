"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotLogined = exports.isLogined = exports.verify = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var accesstoken_1 = require("./accesstoken");
var usermodel_1 = __importDefault(require("../lib/model/usermodel"));
var email;
function verify(req, res, next) {
    var token = req.cookies.jwttoken;
    var decoded = null;
    try {
        decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        email = decoded.email;
        console.log("로그인 되어있음");
        return next();
        ///로그인되었으면 next()해서 다음함수 호출
    }
    catch (error) {
        // console.log(error);
        if (!token) {
            console.log("아직 토큰은 없습니다. 로그인이 안되있는거지");
            next();
        }
        if (error.name === "TokenExpiredError") {
            //토큰이 만료됬네? 오케이 리프레쉬 토큰확인해볼게
            usermodel_1.default
                .findOne({ _id: { $in: [decoded.user_objectId] } })
                .then(function (result) {
                var validation_promise = new Promise(function (resolve, reject) {
                    try {
                        var validation_token = jsonwebtoken_1.default.verify(result.refresh_token, process.env.JWT_SECRET);
                        resolve(validation_token);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
                validation_promise
                    .then(function (result) {
                    //어 리프레쉬 토큰 있고 유효하네
                    console.log("리프레쉬 토큰이 있고 유효하니 로그인을 유지시켜줄게");
                    accesstoken_1.createToken(req, res, email, result.username, decoded.user_objectId);
                    return res.redirect(req.originalUrl);
                })
                    .catch(function (err) {
                    //야 리프레쉬 토큰은 있는데 유효기간이 끝났어
                    console.log("토큰은 쿠키에 저장되어있긴해 근데 로그인이 되지 않아 있네?, 또는 리프레쉬 토큰이 만료되서 로그인해서 새로운 리프레쉬 토큰을 발급받아, 로그인이 필요합니다.");
                    next();
                });
            })
                .catch(function (err) {
                //리프레쉬토큰 찾다가 에러나면 알려줄게
                console.error(err);
            });
        }
    }
}
exports.verify = verify;
function isLogined(req, res, next) {
    var token = req.cookies.jwttoken;
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return res.redirect("/");
    }
    catch (error) {
        // console.error(error);
        return next();
    }
}
exports.isLogined = isLogined;
function isNotLogined(req, res, next) {
    var token = req.cookies.jwttoken;
    try {
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        return next();
    }
    catch (error) {
        // console.error(error);
        return res.redirect("/api/login");
    }
}
exports.isNotLogined = isNotLogined;
//# sourceMappingURL=jwtverify.js.map