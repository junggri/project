import kakaoCre from "../config/kakao.json";
import googleAPI from "../config/google.json";
import naverCre from "../config/naver.json";

const passport = require("passport"),
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy,
  NaverStrategy = require("passport-naver").Strategy,
  KakaoStrategy = require("passport-kakao").Strategy;

passport.serializeUser(function (user: any, done: any) {
  // console.log("serializeUser", user);
  done(null, user);
});

passport.deserializeUser(function (user: any, done: any) {
  // console.log("deserializeUser", user);
  //시리얼라이즈의 user.id로 구분하고 디시리럴라이즈의 user값으로 구분된 값을 req.user에 집어넜는다
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleAPI.web.client_id,
      clientSecret: googleAPI.web.client_secret,
      callbackURL: googleAPI.web.redirect_uris[0],
    },
    function (accessToken: any, refreshToken: any, profile: any, done: any) {
      return done(null, profile);
    }
  )
);

passport.use(
  new NaverStrategy(
    {
      clientID: naverCre.clientID,
      clientSecret: naverCre.clientSecret,
      callbackURL: naverCre.callbackURL,
    },
    function (accessToken: any, refreshToken: any, profile: any, done: any) {
      return done(null, profile);
    }
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: kakaoCre.clientID,
      callbackURL: kakaoCre.callbackURL,
    },
    function (accessToken: any, refreshToken: any, profile: any, done: any) {
      return done(null, profile);
    }
  )
);

export default passport;
