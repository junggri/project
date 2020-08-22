import express, { Request, Response, NextFunction } from "express";
import refreshToken from "../lib/refreshtoken";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import url from "url";
import moment from "moment";
import mongoSanitize from "mongo-sanitize";
import crypto_cre from "../config/crypto.json";
import csrf from "csurf";
import mail from "../lib/nodeMailer";
import mailCre from "../config/mailer.json";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import sanitizeHtml from "sanitize-html";
import userController from "../lib/controller/userContoller";
import registerSymController from "../lib/controller/registerSymContoller";
import provideController from "../lib/controller/provideController";
// import oauthController from "../lib/controller/oauthController";
import users from "../lib/model/usermodel";
import auth from "../lib/authStatus";
// import oauth from "../lib/model/oauthModel";
import getDataFromToken from "../lib/getDataFromToken";
import { selcted_sympton } from "../lib/symptonList";
import { upload, reupload, modifiedUpload, modifiedReupload } from "../lib/multer";
import { verify, isLogined, isNotLogined } from "../lib/jwtverify";
//verify는 로그인이 유지되기 위하여 이용되는 미들웨어 get에는 무조건 포함해야하
//islogined isnotlogind도 fetch 할때 적용된다 확인하기
import { createToken } from "../lib/accesstoken";
import deleteImg from "../lib/deleteImg";
import { encrypt, decrypt } from "../lib/setAndGetCookie";
import sendVerifyNumver from "../lib/sendPhone";
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    // secure: true,
  },
});
const parseForm = bodyParser.urlencoded({ extended: false });
const router = express.Router();

interface Decoded {
  email: string;
  user_objectId: string;
}
interface Json {
  _json: any;
}
interface ID {
  id: string;
}
interface UserData {
  provider: string;
  email: string;
  name: string;
  sub: string;
  nickname: string;
  id: string;
}
// router.use("/", verify);
//모든 라우트 마다 로그인//로그인 안했을때 처리
//토큰값은 쿠키ㅔㅇ 저장한다

router.post("/setUserEmailCookie", csrfProtection, verify, (req, res) => {
  if (req.body.state === "set") {
    const encryptResult = encrypt(req.body.email);
    res.json({ email: encryptResult });
  } else {
    const decryptResult = decrypt(req.body.email);
    res.json({ decrypt: decryptResult });
  }
});

router.get("/login", csrfProtection, verify, isLogined, (req: any, res, next) => {
  if (req.headers.referer === undefined) {
    req.session.referer = "http://localhost:3000";
  } else {
    req.session.referer = req.headers.referer;
  }
  res.render("login", { csrfToken: req.csrfToken() });
});

router.post("/login_process", parseForm, csrfProtection, async (req: any, res: any) => {
  let _email = mongoSanitize(req.body.email);
  let _pwd = mongoSanitize(req.body.pwd);
  // let result: any = await users.findOne({ email: { $in: [_email] } });
  //보안이라는데;;흠;;;
  let result: any = await users.findOne({ email: _email });
  try {
    if (result === null) {
      res.json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
    } else {
      let userObjectId = result._id;
      crypto.pbkdf2(_pwd, result.salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, (err, key) => {
        if (key.toString("base64") === result.password) {
          //오케이 로그인 성공했어
          createToken(req, res, _email, result.name, result._id);
          let _refresh_token = refreshToken(req, res, _email, result.name, result._id);
          let save_token = result.refresh_token;
          if (save_token === undefined) {
            userController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
            return res.json({ url: req.session.referer, state: true });
          } else {
            try {
              console.log("리프래쉬 토큰이 있어요");
              jwt.verify(save_token, process.env.JWT_SECRET);
              return res.json({ url: req.session.referer, state: true });
            } catch (error) {
              if (error.name === "TokenExpiredError") {
                console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                userController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
                return res.json({ url: req.session.referer, state: true });
              }
            }
          }
        } else {
          res.json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
});

// router.get("/oauth_register", csrfProtection, verify, isLogined, (req, res) => {
//   console.log(req.user);
//   let _email, _name, _id: string;
//   let user: UserData = (req.user as Json)._json;
//   if ((req.user as UserData).provider === "google") {
//     (_email = user.email), (_name = user.name), (_id = user.sub);
//   } else if ((req.user as UserData).provider === "naver") {
//     if (user.name === undefined) _name = "";
//     (_email = user.email), (_id = user.id);
//   } else if ((req.user as UserData).provider === "kakao") {
//   }
//   res.render("oauth", { csrfToken: req.csrfToken(), email: _email, name: _name, id: _id });
// });

// router.post("/oauth_check_user_email", csrfProtection, verify, async (req, res) => {
//   // console.log((req.user as ID).id, (req.user as Json)._json, req.body);
//   let isUser = await users.findOne({ email: req.body.email });
//   let isOauth = await oauth.findOne({ id: (req.user as ID).id });
//   console.log(isUser, isOauth);
//   if (isUser === null && isOauth === null) {
//     return res.json({ state: true });
//   } else {
//     return res.json({ state: false });
//   }
// });

// router.post("/oauth_register_process", csrfProtection, verify, isLogined, (req, res) => {
//   oauthController.save(req, res, req.body);
// });

router.get("/register_previous", csrfProtection, verify, isLogined, (req, res) => {
  res.render("registerprevious");
});

router.get("/register/:way", csrfProtection, verify, isLogined, (req: any, res) => {
  req.params.way === "common" ? res.render("common", { csrfToken: req.csrfToken() }) : res.render("provide", { csrfToken: req.csrfToken() });
});

router.post("/register_common_process", parseForm, csrfProtection, verify, isLogined, (req, res, next) => {
  let inputdata = {};
  const { common_email, common_name, common_pwd } = req.body;
  crypto.randomBytes(crypto_cre.len, (err, buf) => {
    let salt = buf.toString("base64");
    let time = moment().format("YYYY-MM-DD");
    crypto.pbkdf2(common_pwd, salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, async (err, key) => {
      inputdata = {
        email: common_email,
        password: key.toString("base64"),
        name: common_name,
        salt: salt,
        createdAt: time,
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

router.post("/register_provide_process", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
  let inputdata = {};
  const { name, gender, email, pwd, phone } = req.body;
  crypto.randomBytes(crypto_cre.len, (err, buf) => {
    let salt = buf.toString("base64");
    crypto.pbkdf2(pwd, salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, async (err, key) => {
      inputdata = {
        email: email,
        password: key.toString("base64"),
        name: name,
        gender: gender,
        phone_number: phone,
        salt: salt,
      };
      try {
        provideController.save(inputdata);
        return res.redirect("/provide/index");
      } catch (error) {
        console.error(error);
      }
    });
  });
});

router.post("/check_email", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
  let responseData = null;
  try {
    let user = await users.find({ email: req.body.email });
    let provideResult = await provideController.find(req.body.email);
    if (user.length === 0 && provideResult.length === 0) {
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
  let sympton_code = req.body.code.sort((a: number, b: number) => {
    return a - b;
  });
  req.session.code = sympton_code;
  req.session.price = req.body.price;
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    res.json({ state: true });
  } catch (error) {
    res.json({ state: false });
  }
});

router.get("/get_estimate", csrfProtection, verify, isNotLogined, (req, res) => {
  if (url.parse(req.url).query === null) {
    res.redirect("/");
  }
  if (req.session.img) {
    req.session.img = [];
  }
  let authUI = auth.status(req, res);
  let { code } = req.session;
  selcted_sympton(code).then((result) => {
    res.render("get_estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result, price: req.session.price });
  });
});

router.post("/delete_session_img", parseForm, csrfProtection, verify, (req, res) => {
  req.session.img.splice(req.session.img.indexOf(req.body.data), 1);
  res.json(req.session.img);
});

router.post("/fetch_session", parseForm, csrfProtection, verify, (req, res) => {
  let decoded = getDataFromToken(req, res);
  req.session.img === undefined || req.session.img.length === 0 ? res.json({ state: false }) : res.json({ img: req.session.img, email: decoded });
});

router.post("/fetch_upload_image", verify, (req: any, res, next) => {
  req.session.img = [];
  let decoded = getDataFromToken(req, res);
  upload(req, res, (err: any) => {
    if (err) {
      console.error(err);
      req.session.img = [];
      res.json({ state: false });
      return;
    }
    res.json({ img: req.session.img, email: decoded });
  });
});

router.post("/fetch_add_upload_image", verify, (req: any, res, next) => {
  let decoded = getDataFromToken(req, res);
  reupload(req, res, (err: any) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({ img: req.session.img, email: decoded });
  });
});

router.post("/register_estimate_process", parseForm, csrfProtection, verify, (req, res) => {
  const token = req.cookies.jwttoken;
  let { sympton_detail, time, minute, postcode, roadAddress, userwant_content, price, sigunguCode, sigungu, bname, bname1 } = req.body;
  let { code, img } = req.session;
  let _time = moment().format("YYYY-MM-DD");
  let detailAddress = sanitizeHtml(req.body.detailAddress);
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let inputdata = {
      user_object_id: (decoded as Decoded).user_objectId,
      email: (decoded as Decoded).email,
      code: code,
      sympton_detail: sanitizeHtml(sympton_detail),
      img: img,
      userwant_time: { time, minute },
      address: { postcode, sigunguCode, sigungu, bname, bname1, roadAddress, detailAddress },
      userwant_content: sanitizeHtml(userwant_content),
      predict_price: price,
      createdAt: _time,
    };
    req.session.img = [];
    req.session.code = [];
    req.session.price = "";
    registerSymController.save(req, res, inputdata, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
    deleteImg((decoded as Decoded).email, (decoded as Decoded).user_objectId);
    res.redirect("/api/mypage");
  } catch (error) {
    console.error(error);
  }
});

//isnotlogined
router.get("/mypage", csrfProtection, verify, isNotLogined, (req, res) => {
  const token = req.cookies.jwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let _dir = path.join(path.join(path.join(__dirname + `/../../upload/${(decoded as Decoded).user_objectId}`)));
    if (!fs.existsSync(_dir)) {
      fs.mkdirSync(_dir);
    }
    registerSymController.findAllRegister(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
  } catch (error) {
    console.error(error, "로그인이 되지 않았습니다.");
  }
});

router.get("/modified_estimate/:id", csrfProtection, verify, isNotLogined, async (req, res) => {
  let authUI = auth.status(req, res);
  let response = await registerSymController.findCodeBeforeModified(req, res);
  if (response === null) {
    return res.redirect("/api/mypage");
  }
  let codeList = await selcted_sympton(response.code);
  req.session._id = req.url.split("/")[2];
  ///증상 objectid 저장
  res.render("modified_estimate", { authUI: authUI, csrfToken: req.csrfToken(), register_symptons: codeList });
});

router.post("/modified_get_image", verify, isNotLogined, async (req, res) => {
  req.session.img = [];
  let decoded = getDataFromToken(req, res);
  let response = await registerSymController.findImageBeforeModified(req, res);
  if (response.img === null) return;
  for (let i = 0; i < response.img.length; i++) {
    req.session.img.push(response.img[i]);
  }
  res.json({ response: response, email: decoded, img: req.session.img });
});

router.post("/modified_delete_session_img", parseForm, csrfProtection, verify, isNotLogined, (req, res) => {
  req.session.img.splice(req.session.img.indexOf(req.body.data), 1);
  res.json(req.session.img);
});

router.post("/modified_upload_image", verify, (req: any, res, next) => {
  let decoded = getDataFromToken(req, res);
  modifiedUpload(req, res, (err: any) => {
    if (err) {
      console.error(err);
      req.session.img = [];
      res.json({ state: false });
      return;
    }
    res.json({ img: req.session.img, email: decoded });
  });
});

router.post("/modified_add_upload_image", verify, (req: any, res, next) => {
  let decoded = getDataFromToken(req, res);
  modifiedReupload(req, res, (err: any) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({ img: req.session.img, email: decoded });
  });
});

router.post("/modified_estimate/modified_estimate_process", parseForm, csrfProtection, verify, isNotLogined, (req, res) => {
  let decoded = getDataFromToken(req, res);
  console.log(req.body);
  let { sympton_detail, time, minute, postcode, roadAddress, userwant_content, sigunguCode, sigungu, bname, bname1 } = req.body;
  let detailAddress = sanitizeHtml(req.body.detailAddress);
  let data = {
    sympton_detail: sanitizeHtml(sympton_detail),
    time: time,
    minute: minute,
    img: req.session.img,
    postcode: postcode,
    sigunguCode: sigunguCode,
    sigungu: sigungu,
    bname: bname,
    bname1: bname1,
    roadAddress: roadAddress,
    detailAddress: detailAddress,
    userwant_content: sanitizeHtml(userwant_content),
  };
  registerSymController.modified(req, res, data);
  req.session.img = [];
  req.session.code = [];
  deleteImg((decoded as Decoded).email, (decoded as Decoded).user_objectId);
});

router.post("/delete_register_sympton", parseForm, csrfProtection, verify, isNotLogined, async (req, res) => {
  const token = req.cookies.jwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    registerSymController.deleteSympton(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
    let result = await registerSymController.find(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
    deleteImg((decoded as Decoded).email, (decoded as Decoded).user_objectId);
    res.json(result);
  } catch (error) {
    console.error(error, "로그인이 되지 않았습니다.");
  }
});

router.get("/find_user_email", csrfProtection, verify, isLogined, (req, res) => {
  let authUI = auth.status(req, res);
  res.render("findUserEmail", { authUI: authUI, csrfToken: req.csrfToken() });
});

router.get("/find_user_pwd", csrfProtection, verify, isLogined, (req, res) => {
  let authUI = auth.status(req, res);
  res.render("findUserPwd", { authUI: authUI, csrfToken: req.csrfToken() });
});

router.post("/check_user_email", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
  let result = await userController.find(req.body.email);
  if (result.length === 0) {
    //회원정보가 존재하지 않습니다.
    res.json({ state: false, inputdata: req.body.email });
  } else {
    res.json({ state: true, email: result[0].email });
  }
});

router.post("/check_provide_email", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
  let userResult = await userController.find(req.body.email);
  let provideResult = await provideController.find(req.body.email);
  if (userResult.length === 0 && provideResult.length === 0) {
    //중복된 이메일이 존재하지 않는다는 것
    res.json({ state: true });
  } else {
    res.json({ state: false });
  }
});

router.post("/check_user_and_sendEmail", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
  const encryptResult = encrypt(req.body.email);
  let result = await userController.find(req.body.email);
  let token = crypto.randomBytes(20).toString("hex");
  let mailOption = {
    from: mailCre.email,
    to: req.body.email,
    subject: "비밀번호 재설정 링크입니다..",
    html: `비밀번호 초기화를 위하여 아래의 링크를 클릭해주세요 
          <a href="http://localhost:3000/api/reset?reto=${token}&email=${encryptResult}">비밀번호 초기화</a>`,
  };
  if (result.length === 0) {
    res.json({ state: false, inputdata: req.body.email });
  } else {
    res.cookie("rs_to", token, { httpOnly: true, expires: new Date(Date.now() + 60000 * 5) });
    mail(mailOption);
    res.json({ state: "can-reset" });
  }
});

router.get("/reset", csrfProtection, verify, async (req, res) => {
  const decryptResult = decrypt(req.query.email as string);
  if (req.cookies.rs_to === req.query.reto) {
    res.render("reset", { csrfToken: req.csrfToken(), email: decryptResult });
  } else {
    return res.status(400).send("잘못된 접근입니다.").end();
  }
});

router.post("/reset_process", csrfProtection, verify, isLogined, async (req, res) => {
  res.clearCookie("rs_to");
  userController.resetPassword(req, res);
});

router.post("/logout_process", isNotLogined, (req, res) => {
  res.clearCookie("jwttoken");
  return res.redirect(req.get("Referrer"));
});

router.post("/verify_phone_number", csrfProtection, verify, isLogined, (req, res) => {
  sendVerifyNumver(req, res);
});
export default router;
