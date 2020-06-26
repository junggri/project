import express, { Request, Response, NextFunction } from "express";
import { verify, isLogined, isNotLogined } from "../lib/jwtverify";
import { createToken } from "../lib/accesstoken";
import refreshToken from "../lib/refreshtoken";
import crypto from "crypto";
import users from "../lib/model/usermodel";
import mongoSanitize from "mongo-sanitize";
import crypto_cre from "../config/crypto.json";
import csrf from "csurf";
import mail from "../lib/nodeMailer";
import mailCre from "../config/mailer.json";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import sanitizeHtml from "sanitize-html";
import userController from "../lib/controller/userContoller";
import auth from "../lib/authStatus";
import { selcted_sympton } from "../lib/symptonList";
import path from "path";
import upload from "../lib/multer";
import fs from "fs";
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });
const router = express.Router();

// router.use("/", verify);
//모든 라우트 마다 로그인//로그인 안했을때 처리
//토큰값은 쿠키ㅔㅇ 저장한다

router.get("/login", csrfProtection, verify, isLogined, (req: any, res) => {
  console.log(req.session);
  res.render("login", { csrfToken: req.csrfToken(), msg: "" });
});

router.post("/login_process", parseForm, csrfProtection, verify, isLogined, async (req: any, res: any) => {
  let _email = mongoSanitize(req.body.login_email);
  let _pwd = mongoSanitize(req.body.login_pwd);
  try {
    let result: any = await users.findOne({ email: { $in: [_email] } });
    if (result === null) {
      return res.render("login", {
        csrfToken: req.csrfToken(),
        msg: "등록되지 않은 이메일이거나 잘못된 이메일입니다.",
      });
    } else {
      crypto.pbkdf2(_pwd, result.salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, (err, key) => {
        if (key.toString("base64") === result.password) {
          //오케이 로그인 성공했어
          createToken(req, res, _email, result.name);
          let _refresh_token = refreshToken(req, res, _email, result.name);
          let save_token = result.refresh_token;
          //로그인했으니까 리프레쉬 토큰 있나 확인해볼게
          if (save_token === undefined) {
            //없네 오키 발급해줄게
            userController.tokenUpdate(req, res, _email, _refresh_token);
          } else {
            //있깄있는데 너가 유효한지 확인해볼게
            let validation_refreshToken = new Promise((resolve, reject) => {
              try {
                let validation_token = jwt.verify(save_token, process.env.JWT_SECRET);
                resolve(validation_token);
              } catch (error) {
                reject(error);
              }
            });
            validation_refreshToken
              //야 유효하니까 새로발급안하고 로그인해도 되겠다
              .then(() => {
                console.log("토큰이 유효해요");
                res.redirect("/");
              })
              .catch((err) => {
                if (err.name === "TokenExpiredError") {
                  //있긴있는데 유효하지가 않아서 재발금을 해야겠네ㄴ
                  console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                  userController.tokenUpdate(req, res, _email, _refresh_token);
                }
              });
          }
        } else {
          return res.render("login", {
            csrfToken: req.csrfToken(),
            msg: "비밀번호가 일치하지 않습니다.",
          });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/register_previous", csrfProtection, verify, isLogined, (req, res) => {
  res.render("registerprevious");
});

router.get("/register/:way", csrfProtection, verify, isLogined, (req: any, res) => {
  req.params.way === "common" ? res.render("common", { csrfToken: req.csrfToken() }) : res.render("provide", { csrfToken: req.csrfToken() });
});

router.post("/register_common_process", parseForm, csrfProtection, verify, isLogined, (req, res, next) => {
  const { common_email, common_name, common_pwd } = req.body;
  let inputdata;
  crypto.randomBytes(crypto_cre.len, (err, buf) => {
    let salt = buf.toString("base64");
    crypto.pbkdf2(common_pwd, salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, async (err, key) => {
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
    });
  });
});

router.post("/check_email", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
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

router.post("/pre_estimate", parseForm, csrfProtection, (req, res) => {
  const token = req.cookies.jwttoken;
  let sympton_code = req.body.sort((a: number, b: number) => {
    return a - b;
  });
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ state: true });
  } catch (error) {
    res.json({ state: false });
  }
  req.session.code = sympton_code;
});

//isnotlogined
router.get("/get_estimate", csrfProtection, verify, (req, res) => {
  console.log(req.session);
  let authUI = auth.status(req, res);
  let { code } = req.session;
  let list = selcted_sympton(code);
  res.render("get_estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
});

router.post("/register_estimate_process", parseForm, csrfProtection, verify, (req, res) => {
  console.log(req.body);
});

router.post("/fetch_session", parseForm, csrfProtection, verify, (req, res) => {
  //img가 없다면 아무일도 일어나지 않아야한다.
  req.session.img === undefined ? res.json({ state: false }) : res.json(req.session.img);
});

router.post("/fetch_upload_image", verify, (req: any, res, next) => {
  upload(req, res, (err: any) => {
    if (err) console.error(err);
    console.log(req.session);
    res.json(req.session.img);
  });
});

router.post("/fetch_add_upload_image", verify, (req: any, res, next) => {
  upload(req, res, (err: any) => {
    if (err) console.error(err);
    console.log(req.session);
    res.json(req.session.img);
  });
});

router.get("/mypage", verify, (req, res) => {});

export default router;
