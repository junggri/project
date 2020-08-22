"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var csurf_1 = __importDefault(require("csurf"));
var jwtverify_1 = require("../lib/jwtverify");
var parseForm = body_parser_1.default.urlencoded({ extended: false });
var router = express_1.default.Router();
var csrfProtection = csurf_1.default({
    cookie: {
        httpOnly: true,
    },
});
router.get("/index", csrfProtection, jwtverify_1.verify, function (req, res) {
    res.render("providers/index", { csrfToken: req.csrfToken() });
});
router.post("/login_process", parseForm, csrfProtection, function (req, res) {
    console.log(req.body);
});
exports.default = router;
//# sourceMappingURL=provider.js.map