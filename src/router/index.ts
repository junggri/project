import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

// var isAuthenticated = function (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   if (req.isAuthenticated()) return next();
//   res.send("로그인성공");
// };
router.get("/", (req, res, next) => {
  res.render("index", { one: "wor" });
});

router.get("/estimate", (req, res, next) => {
  res.render("estimate");
});

export default router;
