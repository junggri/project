import passport from "../lib/passport";
import express, { Request, Response, NextFunction } from "express";
import { verify } from "../lib/jwtverify";
import { createToken } from "../lib/accesstoken";
import refreshToken from "../lib/refreshtoken";
import crypto from "crypto";
import users from "../lib/model/userinfo";
let Users: any = new users();

const router = express.Router();

// router.use("/", verify);
router.get("/check", verify, (req: any, res: any) => {
  res.json(req.docoded);
});

//토큰값은 쿠키ㅔㅇ 저장한다
router.post("/login_process", (req: Request, res: Response) => {
  const { login_email, login_pwd } = req.body;
  console.log(req.body);
  // if (login_email === "jjuu6933" && login_pwd === "1111") {
  //   res.json({ message: "사용자가 존재합니다" });
  // } else {
  //   createToken(req, res);
  //   refreshToken(req, res);
  //   res.redirect("/auth/check");
  // }
});

router.get("/register/:way", (req, res) => {
  req.params.way === "common" ? res.render("common") : res.render("provide");
});

router.post("/register_common_process", (req: Request, res: Response) => {
  console.log(req.body);
  // let user = Users.find({ email: req.body.email });
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/plus.login",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  function (req: any, res: any) {
    req.session.save(function () {
      res.redirect("/");
      console.log(req.isAuthenticated());
      // userinfoController.find(req, res);
    });
  }
);

router.get("/naver", passport.authenticate("naver"));

router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/auth/login",
  }),
  function (req: any, res: any) {
    // userinfoController.find(req, res);
  }
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
  function (req: any, res: any) {
    // userinfoController.find(req, res);
  }
);

export = router;
