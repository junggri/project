"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var csurf_1 = __importDefault(require("csurf"));
var body_parser_1 = __importDefault(require("body-parser"));
var jwtverify_1 = require("../lib/jwtverify");
var nocache_1 = __importDefault(require("nocache"));
var webController_1 = __importDefault(require("../controller/webController"));
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
router.get("/index", csrfProtection, jwtverify_1.verify, webController_1.default.index);
router.get("/estimate", jwtverify_1.verify, csrfProtection, webController_1.default.estimate);
router.get("/login", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.login);
router.post("/users/login", parseForm, csrfProtection, webController_1.default.userLogin);
router.get("/register/previous", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.registerPrevious);
router.get("/register/:way", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.registerHow);
router.post("/register/common/process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.commonUserRegister);
router.post("/register/provide/process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.providerRegister);
router.get("/check/duplicate/:email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.checkDuplicateEmail);
router.get("/check/provider/duplicate/:email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.checkDuplicateProviderEmail);
router.get("/user/check/login", parseForm, csrfProtection, webController_1.default.checkBeforeLogin);
router.get("/write/sympton", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.writeSympton);
router.get("/users/session", parseForm, csrfProtection, jwtverify_1.verify, webController_1.default.getUserSession);
router.post("/delete/session/img", parseForm, csrfProtection, jwtverify_1.verify, webController_1.default.deleteSessionImg);
router.post("/add/session/img", jwtverify_1.verify, webController_1.default.addSessionImg);
router.post("/add/session/img/more", jwtverify_1.verify, webController_1.default.addMoreSesionImg);
router.post("/register/users/sympton", parseForm, csrfProtection, jwtverify_1.verify, webController_1.default.registerSympton);
router.get("/mypage", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.mypage);
router.get("/mypage/showestimate", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, nocache_1.default(), webController_1.default.mypageShowEstimate);
router.delete("/delete/sympton", parseForm, csrfProtection, jwtverify_1.isNotLogined, webController_1.default.deleteSympton);
router.get("/find/:symptons/provider", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.findSymptonsProvider);
router.get("/data/submit/:submitid", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.getSubmitData);
router.get("/show/providers/:id", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.showProviders);
router.get("/check/reigister/state/:registerid", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.checkRegistersState);
router.get("/find/providers/submit/:submitid", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.findSubmit);
router.post("/acception/submit", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.acceptSubmit);
router.get("/modifiment/estimate/:id", csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.modifiyEstimatePage);
router.get("/data/modify/:id", jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.getDataInModifyPage);
router.post("/modify/delete/session/img", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.modifyDeleteSessionimg);
router.post("/modify/session/img", jwtverify_1.verify, webController_1.default.modifySessionImg);
router.post("/modify/session/img/more", jwtverify_1.verify, webController_1.default.modifyMoreSessionImg);
router.post("/modified/estimate/process", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isNotLogined, webController_1.default.modifyProcess);
router.get("/verify/phone/number/:number", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, webController_1.default.verifyPhoneNumber);
router.post("/logout", jwtverify_1.isNotLogined, webController_1.default.logout);
exports.default = router;
//# sourceMappingURL=web.js.map