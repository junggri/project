"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var kakao_json_1 = __importDefault(require("../config/kakao.json"));
var google_json_1 = __importDefault(require("../config/google.json"));
var naver_json_1 = __importDefault(require("../config/naver.json"));
var passport = require("passport"), GoogleStrategy = require("passport-google-oauth").OAuth2Strategy, NaverStrategy = require("passport-naver").Strategy, KakaoStrategy = require("passport-kakao").Strategy;
passport.serializeUser(function (user, done) {
    // console.log("serializeUser", user);
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    // console.log("deserializeUser", user);
    //시리얼라이즈의 user.id로 구분하고 디시리럴라이즈의 user값으로 구분된 값을 req.user에 집어넜는다
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: google_json_1.default.web.client_id,
    clientSecret: google_json_1.default.web.client_secret,
    callbackURL: google_json_1.default.web.redirect_uris[0],
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
passport.use(new NaverStrategy({
    clientID: naver_json_1.default.clientID,
    clientSecret: naver_json_1.default.clientSecret,
    callbackURL: naver_json_1.default.callbackURL,
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
passport.use(new KakaoStrategy({
    clientID: kakao_json_1.default.clientID,
    callbackURL: kakao_json_1.default.callbackURL,
}, function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));
exports.default = passport;
//# sourceMappingURL=passport.js.map