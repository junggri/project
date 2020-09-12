import express, { Request, Response, NextFunction } from "express";
import refreshToken from "../lib/refreshtoken";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import moment from "moment";
import mongoSanitize from "mongo-sanitize";
import crypto_cre from "../config/crypto.json";
import csrf from "csurf";
import mail from "../lib/nodeMailer";
import mailCre from "../config/mailer.json";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import sanitizeHtml from "sanitize-html";
import registerSymptonModel from "../lib/model/registerSymModel";
import userController from "../lib/controller/userContoller";
import registerSymController from "../lib/controller/registerSymContoller";
import provideController from "../lib/controller/provideController";
import submitController from "../lib/controller/submitController";
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
import sendPhone from "../lib/sendPhone";
import { makeSumbitbox } from "../lib/mypageState";
import { symptonList } from "../lib/symptonList";

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
  username: string;
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

function makeStorage(decoded: any) {
  let _dir = path.join(path.join(path.join(__dirname + `/../../upload/${(decoded as Decoded).user_objectId}`)));
  if (!fs.existsSync(_dir)) fs.mkdirSync(_dir);
}

router.post("/setUserEmailCookie", csrfProtection, verify, (req, res) => {
  if (req.body.state === "set") {
    const encryptResult = encrypt(req.body.email);
    res.json({ email: encryptResult });
  } else {
    const decryptResult = decrypt(req.body.email);
    res.json({ decrypt: decryptResult });
  }
});

router.get("/index", csrfProtection, verify, (req, res, next) => {
  let authUI = auth.status(req, res);
  res.render("index", { authUI: authUI });
});

router.get("/estimate", verify, csrfProtection, (req, res, next) => {
  let authUI = auth.status(req, res);
  if (req.session.code !== undefined) delete req.session.code;
  if (req.session.img !== undefined) delete req.session.img;
  symptonList().then((result) => {
    res.render("estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result });
  });
});

router.get("/login", csrfProtection, verify, isLogined, (req: any, res, next) => {
  if (req.headers.referer === undefined) {
    req.session.referer = "http://localhost:3000";
  } else {
    req.session.referer = req.headers.referer;
  }
  req.session.save(() => {
    res.render("login", { csrfToken: req.csrfToken() });
  });
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
          if (save_token === undefined || save_token === "") {
            userController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
            return res.json({ url: req.session.referer, state: true });
          } else {
            try {
              jwt.verify(save_token, process.env.JWT_SECRET);
              console.log("리프래쉬 토큰이 있어요", req.session.referer);
              return res.json({ url: req.session.referer, state: true });
            } catch (error) {
              if (error.name === "TokenExpiredError") {
                console.log("토큰이 있는데 유효하지 않아서 재발급할겡", req.session.referer);
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
        res.redirect("/api/index");
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
  let { code } = req.session;
  let authUI = auth.status(req, res);
  let decoded = getDataFromToken(req, res);
  makeStorage(decoded);
  selcted_sympton(code).then((result) => {
    res.render("get_estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result, price: req.session.price });
  });
});

router.post("/delete_img", parseForm, csrfProtection, verify, (req, res) => {
  req.session.img.splice(req.session.img.indexOf(req.body._data), 1);
  res.json(req.session.img);
});

router.post("/fetch_session", parseForm, csrfProtection, verify, (req, res) => {
  let decoded = getDataFromToken(req, res);
  req.session.img === undefined || req.session.img.length === 0 ? res.json({ state: false }) : res.json({ img: req.session.img, email: decoded });
});

router.post("/fetch_upload_image", verify, (req: any, res, next) => {
  let decoded = getDataFromToken(req, res);
  req.session.img = [];
  upload(req, res, (err: any) => {
    if (err) {
      console.error(err);
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
  let { sympton_detail, time, minute, postcode, roadAddress, userwant_content, price, sigungu, bname, bname1, lat, lon } = req.body;
  let { code, img } = req.session;
  let sigunguCode = String(req.body.sigunguCode).substr(0, 2);
  let _time = moment().format("YYYY-MM-DD");
  let detailAddress = sanitizeHtml(req.body.detailAddress);
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let inputdata = {
      user_name: (decoded as Decoded).username,
      user_object_id: (decoded as Decoded).user_objectId,
      email: (decoded as Decoded).email,
      code: code,
      sympton_detail: sanitizeHtml(sympton_detail),
      img: img,
      userwant_time: { time, minute },
      address: { postcode, sigunguCode, sigungu, bname, bname1, roadAddress, detailAddress, lat, lon },
      userwant_content: sanitizeHtml(userwant_content),
      predict_price: price,
      createdAt: _time,
    };
    delete req.session.img;
    delete req.session.code;
    delete req.session.price;
    req.session.save(() => {
      registerSymController.save(req, res, inputdata, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
      deleteImg((decoded as Decoded).email, (decoded as Decoded).user_objectId);
      res.redirect("/api/mypage");
    });
  } catch (error) {
    console.error(error);
  }
});

//isnotlogined
router.get("/mypage", csrfProtection, verify, isNotLogined, (req, res) => {
  const token = req.cookies.jwttoken;
  let authUI = auth.status(req, res);
  let decoded = jwt.verify(token, process.env.JWT_SECRET);
  makeStorage(decoded);
  // let _dir2 = path.join(path.join(path.join(__dirname + `/../../upload/${(decoded as Decoded).user_objectId}/user_img`)));
  // if (!fs.existsSync(_dir2)) fs.mkdirSync(_dir2);
  res.render("mypage", { authUI: authUI, csrfToken: req.csrfToken(), username: (decoded as Decoded).username, useremail: (decoded as Decoded).email });
});

router.post("/check_reigister_state", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await registerSymController.find(req.body.register_id);
  if (result.state == "register") {
    res.json({ state: true });
  } else {
    res.json({ state: false });
  }
});

router.get("/mypage/showestimate", csrfProtection, verify, isNotLogined, (req, res) => {
  const token = req.cookies.jwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    registerSymController.findAllRegister(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
  } catch (error) {
    console.error(error, "로그인이 되지 않았습니다.");
  }
});

router.get("/mypage/estimateDetail/:id", csrfProtection, verify, isNotLogined, async (req, res) => {
  let authUI = auth.status(req, res);
  let result = await submitController.findAllProvider(req.params.id);
  let listLen: string = `총 ${result.length}의 견적을 확인해보세요.`;
  let list = await makeSumbitbox(result);
  res.render("mypageShowSubmit", { authUI: authUI, csrfToken: req.csrfToken(), len: listLen, submit_list: list });
});

router.post("/find_provider", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await submitController.findAllProvider(req.body.sympton_id);
  if (result.length === 0) {
    return res.json({ state: false });
  } else {
    //견적이 존재하는데 ui가 변경되지 않았을경우를 위함.
    let isSubmited = await submitController.isSubmited(req.body.sympton_id);
    if (isSubmited.state === "accept") return res.json({ state: "accept" });
    return res.json({ data: result, state: true });
  }
});

router.post("/find_submit", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await submitController.findSubmit(req.body.submit_id);
  if (result === null) {
    return res.json({ state: false });
  } else {
    res.json({ state: true, data: result });
  }
});

router.post("/get_data_accepted", csrfProtection, verify, isNotLogined, async (req, res) => {
  let acceptData = await submitController.getProviderData(req.body.submit_id);
  let symptonData = await registerSymptonModel.findOne({ _id: acceptData.symptonId });
  acceptData === null ? res.json({ state: false }) : res.json({ state: true, submit: acceptData, register: symptonData });
});

router.post("/accept_estimate", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await submitController.getProviderData(req.body.submit_id);
  await submitController.acceptSubmit(req.body.submit_id, result.symptonId);
  let provide_phone_number = result.provider[0].phone_number;
  sendPhone(req, res, "alert", provide_phone_number);
});

router.get("/modified_estimate/:id", csrfProtection, verify, isNotLogined, async (req, res, next) => {
  try {
    let response = await registerSymController.findBeforeModified(req, res);
    // if (response === null) {
    //   let err = new Error("잘못된 접근입니다.");
    //   next(err);
    //   return;
    // }
    //modified_get_data 로드되면 아래 실행 없으면 바로알러트 하기떄문에 굳이 없어도 되지 않을까싶다.
    let authUI = auth.status(req, res);
    let codeList = await selcted_sympton(response.code);
    req.session._id = req.url.split("/")[2];
    ///증상 objectid 저장
    res.render("modified_estimate", { authUI: authUI, csrfToken: req.csrfToken(), register_symptons: codeList });
  } catch (error) {}
});

router.post("/modified_get_data", verify, isNotLogined, async (req, res) => {
  req.session.img = [];
  let decoded = getDataFromToken(req, res);
  let response = await registerSymController.findImageBeforeModified(req, res);
  if (response === null) return res.json({ state: false });
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
  let { sympton_detail, time, minute, postcode, roadAddress, userwant_content, sigungu, bname, bname1, lat, lon } = req.body;
  let sigunguCode = String(req.body.sigunguCode).substr(0, 2);
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
    lat: lat,
    lon: lon,
    userwant_content: sanitizeHtml(userwant_content),
  };
  registerSymController.modified(req, res, data);
  delete req.session.img;
  delete req.session.code;
  delete req.session._id;
  req.session.save(() => {
    deleteImg((decoded as Decoded).email, (decoded as Decoded).user_objectId);
    return res.redirect("/api/mypage");
  });
});

router.post("/delete_register_sympton", parseForm, csrfProtection, isNotLogined, async (req, res) => {
  const token = req.cookies.jwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    await registerSymController.deleteSympton(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
  } catch (error) {
    console.error(error, "로그인이 되지 않았습니다.");
  }
});

router.post("/logout_process", isNotLogined, (req, res) => {
  res.clearCookie("jwttoken", { path: "/api" });
  return res.redirect(req.get("Referrer"));
});

router.post("/verify_phone_number", csrfProtection, verify, isLogined, (req, res) => {
  sendPhone(req, res, "authorization", req.body.user_phone_number);
});
export default router;
