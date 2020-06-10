import passport from "../lib/passport";
import express, { Request, Response, NextFunction } from "express";
const router = express.Router();

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
