"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jwtverify_1 = require("../lib/jwtverify");
var csurf_1 = __importDefault(require("csurf"));
var authStatus_1 = __importDefault(require("../lib/authStatus"));
var body_parser_1 = __importDefault(require("body-parser"));
var csrfProtection = csurf_1.default({ cookie: true });
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
router.get("/", csrfProtection, jwtverify_1.verify, function (req, res, next) {
    var authUI = authStatus_1.default.status(req, res);
    console.log(req.session);
    res.render("index", { authUI: authUI });
});
router.get("/estimate", jwtverify_1.verify, csrfProtection, function (req, res, next) {
    console.log(req.session);
    var authUI = authStatus_1.default.status(req, res);
    res.render("estimate", { authUI: authUI, csrfToken: req.csrfToken() });
});
exports.default = router;
//# sourceMappingURL=index.js.map