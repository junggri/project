"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
// var isAuthenticated = function (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   if (req.isAuthenticated()) return next();
//   res.send("로그인성공");
// };
router.get("/", function (req, res, next) {
    res.render("index", { one: "wor" });
});
router.get("/estimate", function (req, res, next) {
    res.render("estimate");
});
router.get("/register_previous", function (req, res) {
    res.render("registerprevious");
});
router.get("/login", function (req, res) {
    res.render("login");
});
module.exports = router;
//# sourceMappingURL=index.js.map