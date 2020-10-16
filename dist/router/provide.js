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
router.get("/index", csrfProtection, p_verify_1.verify, p_verify_1.isLogined, providerController_1.default.index);
router.post("/login/process", parseForm, csrfProtection, providerController_1.default.loginProcess);
router.get("/findAllRegister", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.findAllRegister);
router.post("/get_sigungu", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getSigungu);
router.post("/get_bname", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getBname);
router.post("/get_sejong", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getSejong);
router.post("/before_check_getRegisterData", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.checkBeoforeReigsterData);
router.get("/sympton_estimate", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.symptonEstimate);
router.post("/get_registerData", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.getRegisterData);
router.post("/submit_estimate", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.submitEstimate);
router.post("/delete_submit", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.deleteSubmit);
router.get("/mypage", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.mypage);
router.get("/showsubmit", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showSubmit);
router.post("/showSubmitFlag", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showSubmitFlag);
router.get("/showGotEstimate", csrfProtection, p_verify_1.verify, p_verify_1.isNotLogined, providerController_1.default.showGotEstimate);
router.post("/logout", p_verify_1.isNotLogined, providerController_1.default.logout);
exports.default = router;
//# sourceMappingURL=provide.js.map