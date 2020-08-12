import passport from "../lib/passport";
import express, { Request, Response, NextFunction } from "express";
import passportController from "../lib/controller/oauthController";
import user from "../lib/model/usermodel";
import { createToken } from "../lib/accesstoken";
import refreshToken from "../lib/refreshtoken";
import jwt from "jsonwebtoken";
const router = express.Router();

interface Json {
  _json: any;
}

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["https://www.googleapis.com/auth/plus.login", "https://www.googleapis.com/auth/userinfo.email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  async function (req: any, res: Response) {
    let result = await passportController.find(req.user._json.email);
    console.log(result);
    if (result === null) {
      return res.redirect("/api/oauth_register");
    } else {
      createToken(req, res, req.user._json.email, result.name, result._id);
      let _refresh_token = refreshToken(req, res, req.user._json.email, result.name, result._id);
      let save_token = result._refresh_token;
      if (save_token === undefined) {
        passportController.tokenUpdate(req, res, req.user._json.email, _refresh_token);
      } else {
        let validation_refreshToken = new Promise((resolve, reject) => {
          try {
            let validation_token = jwt.verify(save_token, process.env.JWT_SECRET);
            resolve(validation_token);
          } catch (error) {
            reject(error);
          }
        });
        validation_refreshToken
          .then(() => {
            console.log("토큰이 유효해요");
            return res.redirect("/");
          })
          .catch((err) => {
            if (err.name === "TokenExpiredError") {
              console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
              passportController.tokenUpdate(req, res, req.user._json.email, _refresh_token);
            }
          });
      }
    }
  }
);

router.get("/naver", passport.authenticate("naver"));

router.get(
  "/naver/callback",
  passport.authenticate("naver", {
    failureRedirect: "/auth/login",
  }),
  async function (req: any, res: Response) {
    let result = await passportController.find(req.user._json.email);
    if (result === null) {
      return res.redirect("/api/oauth_register");
    } else {
      createToken(req, res, req.user._json.email, result.name, result._id);
      let _refresh_token = refreshToken(req, res, req.user._json.email, result.name, result._id);
      let save_token = result._refresh_token;
      if (save_token === undefined) {
        passportController.tokenUpdate(req, res, req.user._json.email, _refresh_token);
      } else {
        let validation_refreshToken = new Promise((resolve, reject) => {
          try {
            let validation_token = jwt.verify(save_token, process.env.JWT_SECRET);
            resolve(validation_token);
          } catch (error) {
            reject(error);
          }
        });
        validation_refreshToken
          .then(() => {
            console.log("토큰이 유효해요");
            return res.redirect("/");
          })
          .catch((err) => {
            if (err.name === "TokenExpiredError") {
              console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
              passportController.tokenUpdate(req, res, req.user._json.email, _refresh_token);
            }
          });
      }
    }
  }
);

router.get("/kakao", passport.authenticate("kakao"));

router.get(
  "/kakao/callback",
  passport.authenticate("kakao", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
  }),
  function (req: Request, res: Response) {}
);

export default router;
