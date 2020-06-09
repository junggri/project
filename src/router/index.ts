import express, { Request, Response, NextFunction } from "express";
import url from "url";
const router = express.Router();

// var isAuthenticated = function (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) {
//   if (req.isAuthenticated()) return next();
//   res.send("로그인성공");
// };
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.render("index", { one: "wor" });
});

router.get("/estimate", (req: Request, res: Response, next: NextFunction) => {
  res.render("estimate");
});

router.get("/register_previous", (req: Request, res: Response) => {
  res.render("registerprevious");
});

router.get("/login", (req: Request, res: Response) => {
  res.render("login");
});
export = router;
