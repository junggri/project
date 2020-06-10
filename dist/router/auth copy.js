"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var passport_1 = __importDefault(require("../lib/passport"));
var express_1 = __importDefault(require("express"));
var jwtverify_1 = require("../lib/jwtverify");
var userinfo_1 = __importDefault(require("../lib/model/userinfo"));
var Users = new userinfo_1.default();
var router = express_1.default.Router();
// router.use("/", verify);
router.get("/check", jwtverify_1.verify, function (req, res) {
    res.json(req.docoded);
});
//토큰값은 쿠키ㅔㅇ 저장한다
router.post("/login_process", function (req, res) {
    var _a = req.body, login_email = _a.login_email, login_pwd = _a.login_pwd;
    console.log(req.body);
    // if (login_email === "jjuu6933" && login_pwd === "1111") {
    //   res.json({ message: "사용자가 존재합니다" });
    // } else {
    //   createToken(req, res);
    //   refreshToken(req, res);
    //   res.redirect("/auth/check");
    // }
});
router.get("/register/:way", function (req, res) {
    req.params.way === "common" ? res.render("common") : res.render("provide");
});
router.post("/register_common_process", function (req, res) {
    console.log(req.body);
    // let user = Users.find({ email: req.body.email });
});
router.get("/google", passport_1.default.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
}));
router.get("/google/callback", passport_1.default.authenticate("google", {
    failureRedirect: "/",
}), function (req, res) {
    req.session.save(function () {
        res.redirect("/");
        console.log(req.isAuthenticated());
        // userinfoController.find(req, res);
    });
});
router.get("/naver", passport_1.default.authenticate("naver"));
router.get("/naver/callback", passport_1.default.authenticate("naver", {
    failureRedirect: "/auth/login",
}), function (req, res) {
    // userinfoController.find(req, res);
});
router.get("/kakao", passport_1.default.authenticate("kakao"));
router.get("/kakao/callback", passport_1.default.authenticate("kakao", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
}), function (req, res) {
    // userinfoController.find(req, res);
});
module.exports = router;
//# sourceMappingURL=auth copy.js.map