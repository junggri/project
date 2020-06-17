"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var jwtverify_1 = require("../lib/jwtverify");
var authStatus_1 = __importDefault(require("../lib/authStatus"));
router.get("/", jwtverify_1.verify, function (req, res, next) {
    console.log(req.session);
    var authUI = authStatus_1.default.status(req, res);
    res.render("index", { authUI: authUI });
});
router.get("/estimate", jwtverify_1.verify, function (req, res, next) {
    var authUI = authStatus_1.default.status(req, res);
    res.render("estimate", { authUI: authUI });
});
exports.default = router;
//# sourceMappingURL=index.js.map