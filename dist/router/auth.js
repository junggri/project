"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("../lib/passport"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
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
exports.default = router;
//# sourceMappingURL=auth.js.map