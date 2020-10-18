"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var csurf_1 = __importDefault(require("csurf"));
var p_verify_1 = require("../lib/p_verify");
var providerController_1 = __importDefault(require("../controller/providerController"));
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
router.get("/main", csrfProtection, p_verify_1.verify, p_verify_1.isLogined, providerController_1.default.main);
router.post("/users/login", parseForm, csrfProtection, providerController_1.default.loginProcess);
router.get("/show/items", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showItems);
router.get("/get/sigungu/:data", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getSigungu);
router.get("/get/bname/:sido/:sigungu", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getBname);
router.get("/get/sejong/:data", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getSejong);
router.get("/check/state/item/:registerId", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.checkStateRegisterState);
router.get("/sympton", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.symptonEstimate);
router.get("/get/data/item/:registerId", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getRegisterData);
router.post("/submit/estimate/process", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.submitEstimate);
router.delete("/delete/submit", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.deleteSubmit);
router.get("/mypage", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.mypage);
router.get("/submit", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showSubmit);
router.get("/check/flags/submit/:submitId", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showSubmitFlag);
router.get("/user/send", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showGotEstimate);
router.post("/logout", p_verify_1.isNotLogined, providerController_1.default.logout);
exports.default = router;
//# sourceMappingURL=provide.js.map