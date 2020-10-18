"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jwtverify_1 = require("../lib/jwtverify");
var csurf_1 = __importDefault(require("csurf"));
var body_parser_1 = __importDefault(require("body-parser"));
var commonController_1 = __importDefault(require("../controller/commonController"));
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var csrfProtection = csurf_1.default({ cookie: true });
var router = express_1.default.Router();
router.get("/find/user/email", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, commonController_1.default.fundUserEmail);
router.get("/find/user/pwd", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, commonController_1.default.findUserPwd);
router.get("/check/users/email/:email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, commonController_1.default.checkUserEmail);
router.get("/send/users/email/:email", parseForm, csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, commonController_1.default.checkAndSendEmail);
router.get("/reset", csrfProtection, jwtverify_1.verify, commonController_1.default.reset);
router.post("/reset/process", csrfProtection, jwtverify_1.verify, jwtverify_1.isLogined, commonController_1.default.resetProcess);
router.get("/users/:email/cookie/:state", csrfProtection, jwtverify_1.verify, commonController_1.default.getAndSetEmail);
exports.default = router;
//# sourceMappingURL=common.js.map