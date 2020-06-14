import express, { Request, Response, NextFunction } from "express";
import { verify, isAuthenticated } from "../lib/jwtverify";
import { createToken } from "../lib/accesstoken";
import refreshToken from "../lib/refreshtoken";
import crypto from "crypto";
import users from "../lib/model/userinfo";
import mongoSanitize from "mongo-sanitize";
import crypto_cre from "../config/crypto.json";
import csrf from "csurf";
import mail from "../lib/nodeMailer";
import mailCre from "../config/mailer.json";
import bodyParser from "body-parser";
import sanitizeHtml from "sanitize-html";
import { runInNewContext } from "vm";

const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

const router = express.Router();

// router.use("/", verify);
router.get("/check", verify, (req: any, res) => {
  res.json(req.docoded);
});

//토큰값은 쿠키ㅔㅇ 저장한다

router.get("/login", csrfProtection, (req: any, res) => {
  res.render("login", { csrfToken: req.csrfToken() });
});

router.post("/login_process", parseForm, csrfProtection, async (req, res) => {
  let _email = mongoSanitize(req.body.login_email);
  let _pwd = mongoSanitize(req.body.login_pwd);
  // crypto.pbkdf2;]

  try {
    let result: any = await users.findOne({ email: { $in: [_email] } });
    if (result === null) {
    }
    // crypto.pbkdf2(
    //   _pwd,
    //   Users.salt,
    //   crypto_cre.num,
    //   crypto_cre.len,
    //   crypto_cre.sys,
    //   (err, key) => {}
    // );
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

router.get("/register_previous", (req, res) => {
  res.render("registerprevious");
});

router.get("/register/:way", csrfProtection, (req: any, res) => {
  req.params.way === "common"
    ? res.render("common", { csrfToken: req.csrfToken() })
    : res.render("provide", { csrfToken: req.csrfToken() });
});

router.post(
  "/register_common_process",
  parseForm,
  csrfProtection,
  (req, res, next) => {
    const { common_email, common_name, common_pwd } = req.body;
    let inputdata;
    crypto.randomBytes(crypto_cre.len, (err, buf) => {
      let salt = buf.toString("base64");
      crypto.pbkdf2(
        common_email,
        salt,
        crypto_cre.num,
        crypto_cre.len,
        crypto_cre.sys,
        async (err, key) => {
          inputdata = {
            email: common_email,
            password: key.toString("base64"),
            name: common_name,
            salt: salt,
          };
          let Users: any = new users(inputdata);
          try {
            await Users.save();
            res.redirect("/");
          } catch (error) {
            // let err = new Error("등록오류 입니다.");
            // next(err);
            console.error(error);
          }
        }
      );
    });
  }
);

router.post("/check_email", parseForm, csrfProtection, async (req, res) => {
  let responseData = null;
  try {
    let user = await users.find({ email: req.body.email });
    if (user.length === 0) {
      let randomArray = [];
      for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 10);
        randomArray.push(randomNum);
      }
      let mailOption = {
        from: mailCre.email,
        to: req.body.email,
        subject: "인증을 위한 메일입니다.",
        html: `<h1>인증번호는 ${randomArray.join("")} 입니다.</h1>`,
      };
      responseData = {
        state: "true",
        msg: " ",
        validation_num: randomArray.join(""),
      };
      mail(mailOption);
    } else {
      responseData = { state: "false", msg: "이미 사용중인 이메일입니다" };
    }
    res.json(responseData);
  } catch (error) {
    console.error(error);
  }
});
export default router;
