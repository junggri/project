import passport from "../lib/passport";
import express, { Request, Response, NextFunction } from "express";
import { verify } from "../lib/jwtverify";
import { createToken } from "../lib/accesstoken";
import refreshToken from "../lib/refreshtoken";
import crypto from "crypto";
import users from "../lib/model/userinfo";
import mongoSani from "mongo-sanitize";
import crypto_cre from "../config/crypto.json";
const router = express.Router();

// router.use("/", verify);
router.get("/check", verify, (req: any, res: any) => {
  res.json(req.docoded);
});

//토큰값은 쿠키ㅔㅇ 저장한다
router.post("/login_process", async (req: Request, res: Response) => {
  let _email = mongoSani(req.body.login_email);
  let _pwd = mongoSani(req.body.login_pwd);
  try {
    let Users = await users.findOne({
      email: { $in: [_email] },
      password: { $in: [_pwd] },
    });
    console.log(Users);
  } catch (error) {
    console.error(error);
  }
  // users
  //   .find({ email: { $in: [_email] }, password: { $in: [_pwd] } })
  //   .then((result) => {
  //     res.send(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
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

router.post("/register_common_process", async (req: Request, res: Response) => {
  const { common_email, common_name, common_pwd } = req.body;
  crypto.randomBytes(crypto_cre.len, (err, buf) => {
    let salt = buf.toString("base64");
  });
  let Users: any = new users({
    email: common_email,
    password: common_pwd,
    name: common_name,
  });
  try {
    let user = await Users.save();
    console.log(user);
  } catch (error) {
    console.error(error);
  }
});

router.post("/check_email", async (req, res) => {
  let responseData = null;
  try {
    let user = await users.find({ email: req.body.email });
    console.log(user.length);
    if (user.length === 0) {
      responseData = { state: "true", msg: "사용가능한 이메일입니다." };
    } else {
      responseData = { state: "false", msg: "이미 사용중인 이메일입니다" };
    }
    res.json(responseData);
  } catch (error) {
    res.json(error);
  }
});

export = router;
