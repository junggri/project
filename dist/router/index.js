"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = router;
//# sourceMappingURL=index.js.map