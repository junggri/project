import { Request, Response, NextFunction } from "express";
import auth from "../lib/authStatus";
import { symptonList } from "../lib/symptonList";
import mongoSanitize from "mongo-sanitize";
import users from "../db/schema/usermodel";
import crypto_cre from "../config/crypto.json";
import crypto from "crypto";
import { createToken } from "../lib/accesstoken";
import { upload, reupload, modifiedUpload, modifiedReupload } from "../lib/multer";
import userController from "../db/model/userModel";
import provideController from "../db/model/provideModel";
import registerSymController from "../db/model/registerSymptonModel";
import registerSymptonModel from "../db/schema/registerSymModel";
import submitController from "../db/model/submitModel";
import refreshToken from "../lib/refreshtoken";
import jwt from "jsonwebtoken";
import moment from "moment";
import mail from "../lib/nodeMailer";
import mailCre from "../config/mailer.json";
import path from "path";
import fs from "fs";
import getDataFromToken from "../lib/getDataFromToken";
import { selcted_sympton } from "../lib/symptonList";
import deleteImg from "../lib/deleteImg";
import sanitizeHtml from "sanitize-html";
import { makeSumbitbox } from "../lib/mypageState";
import sendPhone from "../lib/sendPhone";
import { Decoded, Err } from "../interface/all_interface";

interface WebController {
  index(req: Request, res: Response): void;
  estimate(req: Request, res: Response): void;
  login(req: Request, res: Response): void;
  userLogin(req: Request, res: Response): void;
  registerPrevious(req: Request, res: Response): void;
  registerHow(req: Request, res: Response): void;
  commonUserRegister(req: Request, res: Response, next: NextFunction): void;
  providerRegister(req: Request, res: Response): void;
  checkDuplicateEmail(req: Request, res: Response): void;
  checkDuplicateProviderEmail(req: Request, res: Response): void;
  checkBeforeLogin(req: Request, res: Response): void;
  writeSympton(req: Request, res: Response): void;
  getUserSession(req: Request, res: Response): void;
  deleteSessionImg(req: Request, res: Response): void;
  addSessionImg(req: Request, res: Response, next: NextFunction): void;
  addMoreSesionImg(req: Request, res: Response, next: NextFunction): void;
  registerSympton(req: Request, res: Response, next: NextFunction): void;
  mypage(req: Request, res: Response, next: NextFunction): void;
  mypageShowEstimate(req: Request, res: Response, next: NextFunction): void;
  deleteSympton(req: Request, res: Response, next: NextFunction): void;
  findSymptonsProvider(req: Request, res: Response, next: NextFunction): void;
  getSubmitData(req: Request, res: Response, next: NextFunction): void;
  showProviders(req: Request, res: Response, next: NextFunction): void;
  checkRegistersState(req: Request, res: Response, next: NextFunction): void;
  findSubmit(req: Request, res: Response, next: NextFunction): void;
  acceptSubmit(req: Request, res: Response, next: NextFunction): void;
  modifiyEstimatePage(req: Request, res: Response, next: NextFunction): void;
  getDataInModifyPage(req: Request, res: Response, next: NextFunction): void;
  modifyDeleteSessionimg(req: Request, res: Response, next: NextFunction): void;
  modifySessionImg(req: Request, res: Response, next: NextFunction): void;
  modifyMoreSessionImg(req: Request, res: Response, next: NextFunction): void;
  modifyProcess(req: Request, res: Response, next: NextFunction): void;
  verifyPhoneNumber(req: Request, res: Response, next: NextFunction): void;
  logout(req: Request, res: Response, next: NextFunction): void;
}

function makeStorage(decoded: any) {
  let _dir = path.join(path.join(path.join(__dirname + `/../../upload/${(decoded as Decoded).user_objectId}`)));
  if (!fs.existsSync(_dir)) fs.mkdirSync(_dir);
}

let webController: WebController = {
  index(req: Request, res: Response) {
    let authUI = auth.status(req, res);
    res.render("index", { authUI: authUI });
  },

  async estimate(req: Request, res: Response) {
    let authUI = auth.status(req, res);
    if (req.session.code !== undefined) delete req.session.code;
    if (req.session.img !== undefined) delete req.session.img;
    let result = await symptonList();
    res.render("estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result });
  },

  login(req: Request, res: Response) {
    req.headers.referer === undefined ? (req.session.referer = "http://localhost:3000/web/index") : (req.session.referer = req.headers.referer);
    req.session.save(() => {
      res.render("login", { csrfToken: req.csrfToken() });
    });
  },

  async userLogin(req: any, res: any) {
    let _email = mongoSanitize(req.body.email);
    let _pwd = mongoSanitize(req.body.pwd);
    //보안이라는데;;흠;;;
    let result: any = await users.findOne({ email: _email });
    try {
      if (result === null) {
        res.status(200).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
      } else {
        let userObjectId = result._id;
        crypto.pbkdf2(_pwd, result.salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, (err, key) => {
          if (key.toString("base64") === result.password) {
            createToken(req, res, _email, result.name, result._id);
            let _refresh_token = refreshToken(req, res, _email, result.name, result._id);
            let save_token = result.refresh_token;
            if (save_token === undefined || save_token === "") {
              userController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
              return res.status(200).json({ url: req.session.referer, state: true });
            } else {
              try {
                jwt.verify(save_token, process.env.JWT_SECRET);
                return res.status(200).json({ url: req.session.referer, state: true });
              } catch (error) {
                if (error.name === "TokenExpiredError") {
                  userController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
                  return res.status(200).json({ url: req.session.referer, state: true });
                }
              }
            }
          } else {
            res.status(200).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  },

  registerPrevious(req: Request, res: Response) {
    res.render("registerprevious");
  },

  registerHow(req: Request, res: Response) {
    req.params.way === "common" ? res.render("common", { csrfToken: req.csrfToken() }) : res.render("provide", { csrfToken: req.csrfToken() });
  },

  commonUserRegister(req: Request, res: Response, next: NextFunction) {
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
          res.redirect("/web/index");
        } catch (error) {
          // let err = new Error("등록오류 입니다.");
          // next(err);
          console.error(error);
        }
      });
    });
  },

  async providerRegister(req: Request, res: Response) {
    let inputdata = {};
    const { name, gender, email, pwd, phone, lat1, lon1, address1, lat2, lon2, address2, lat3, lon3, address3 } = req.body;
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
          address: { add1: { address: address1, lat: lat1, lon: lon1 }, add2: { address: address2, lat: lat2, lon: lon2 }, add3: { address: address3, lat: lat3, lon: lon3 } },
        };
        try {
          provideController.save(inputdata);
          return res.redirect("/provide/index");
        } catch (error) {
          console.error(error);
        }
      });
    });
  },

  async checkDuplicateEmail(req: Request, res: Response) {
    let responseData = null;
    try {
      let user = await users.find({ email: req.params.email });
      let provideResult = await provideController.find(req.params.email);
      console.log(user, provideResult);
      if (user.length === 0 && provideResult.length === 0) {
        let randomArray = [];
        for (let i = 0; i < 6; i++) {
          let randomNum = Math.floor(Math.random() * 10);
          randomArray.push(randomNum);
        }
        let mailOption = {
          from: mailCre.email,
          to: req.params.email,
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
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
    }
  },

  async checkDuplicateProviderEmail(req: Request, res: Response) {
    let userResult = await userController.find(req.params.email);
    let provideResult = await provideController.find(req.params.email);
    if (userResult.length === 0 && provideResult.length === 0) {
      return res.status(200).json({ state: true });
    } else {
      return res.status(200).json({ state: false });
    }
  },

  checkBeforeLogin(req: Request, res: Response) {
    const token = req.cookies.jwttoken;
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      return res.status(200).json({ state: true });
    } catch (error) {
      return res.status(401).json({ state: false });
    }
  },

  async writeSympton(req: Request, res: Response) {
    //프론트 백 분리
    let { code } = req.query;
    let authUI = auth.status(req, res);
    let decoded = getDataFromToken(req, res);
    makeStorage(decoded);
    let result = await selcted_sympton(code);
    return res.render("get-estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result, price: req.session.price });
  },

  getUserSession(req: Request, res: Response) {
    let decoded = getDataFromToken(req, res);
    req.session.img === undefined || req.session.img.length === 0 ? res.status(200).json({ state: false }) : res.status(200).json({ img: req.session.img, userdata: decoded });
  },

  deleteSessionImg(req, res) {
    req.session.img.splice(req.session.img.indexOf(req.body._data), 1);
    return res.status(200).json(req.session.img);
  },

  addSessionImg(req: any, res: Response, next: NextFunction) {
    let decoded = getDataFromToken(req, res);
    req.session.img = [];
    upload(req, res, (err: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json({ img: req.session.img, userdata: decoded });
    });
  },

  addMoreSesionImg(req: any, res: Response, next: NextFunction) {
    let decoded = getDataFromToken(req, res);
    reupload(req, res, (err: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json({ img: req.session.img, userdata: decoded });
    });
  },

  registerSympton(req: Request, res: Response) {
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
      req.session.save(async () => {
        let sentProvidersArray: string[] = await registerSymController.sendToProvider(lat, lon);
        await registerSymController.save(inputdata, (decoded as Decoded).email, (decoded as Decoded).user_objectId, sentProvidersArray);
        await deleteImg((decoded as Decoded).email, (decoded as Decoded).user_objectId);
        res.redirect("/web/mypage");
      });
    } catch (error) {
      console.error(error);
    }
  },

  mypage(req: Request, res: Response) {
    let decoded = getDataFromToken(req, res);
    let authUI = auth.status(req, res);
    makeStorage(decoded);
    // let _dir2 = path.join(path.join(path.join(__dirname + `/../../upload/${(decoded as Decoded).user_objectId}/user_img`)));
    // if (!fs.existsSync(_dir2)) fs.mkdirSync(_dir2);
    res.render("mypage", { authUI: authUI, csrfToken: req.csrfToken(), username: (decoded as Decoded).username, useremail: (decoded as Decoded).email });
  },

  mypageShowEstimate(req: Request, res: Response) {
    try {
      let decoded = getDataFromToken(req, res);
      registerSymController.findAllRegister(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
    } catch (error) {
      console.error(error, "로그인이 되지 않았습니다.");
    }
  },

  async deleteSympton(req, res) {
    try {
      let decoded = getDataFromToken(req, res);
      await registerSymController.deleteSympton(req, res, (decoded as Decoded).email, (decoded as Decoded).user_objectId);
    } catch (error) {
      console.error(error, "로그인이 되지 않았습니다.");
    }
  },

  async findSymptonsProvider(req, res) {
    let result = await submitController.findAllProvider(req.params.symptons);
    if (result.length === 0) {
      return res.status(200).json({ state: false });
    } else {
      //견적이 존재하는데 ui가 변경되지 않았을경우를 위함.
      let isSubmited = await submitController.isSubmited(req.params.symptons);
      if (isSubmited.state === "accept") return res.json({ state: "accept" });
      return res.status(200).json({ data: result, state: true });
    }
  },

  async getSubmitData(req, res) {
    let acceptData = await submitController.getProviderData(req.params.submitid);
    let symptonData = await registerSymptonModel.findOne({ _id: acceptData.symptonId });
    acceptData === null ? res.status(200).json({ state: false }) : res.status(200).json({ state: true, submit: acceptData, register: symptonData });
  },

  async showProviders(req, res) {
    let authUI = auth.status(req, res);
    let result = await submitController.findAllProvider(req.params.id);
    let listLen: string = `총 ${result.length}의 견적을 확인해보세요.`;
    let list = await makeSumbitbox(result);
    res.render("mypageShowProvider", { authUI: authUI, csrfToken: req.csrfToken(), len: listLen, submit_list: list });
  },

  async checkRegistersState(req, res) {
    let result = await registerSymController.find(req.params.registerid);
    if (result.state == "register") {
      res.status(200).json({ state: true });
    } else {
      res.status(200).json({ state: false });
    }
  },

  async findSubmit(req, res) {
    let result = await submitController.findSubmit(req.params.submitid);
    if (result === null) {
      return res.json({ state: false });
    } else {
      res.status(200).json({ state: true, data: result });
    }
  },

  async acceptSubmit(req, res) {
    let result = await submitController.getProviderData(req.body.submit_id);
    await submitController.acceptSubmit(req.body.submit_id, result.symptonId);
    let provide_phone_number = result.provider[0].phone_number;
    sendPhone(res, "acception", provide_phone_number);
  },

  async modifiyEstimatePage(req, res, next) {
    try {
      let response = await registerSymController.findBeforeModified(req, res);
      if (response === null) {
        let err: unknown = new Error("잘못된 접근입니다");
        (err as Err).message = "잘못된 접근입니다.";
        (err as Err).stack = "삭제된 증상입니다";
        (err as Err).status = 404;
        next(err);
        return;
      }
      let authUI = auth.status(req, res);
      let codeList = await selcted_sympton(response.code);
      req.session._id = req.url.split("/")[3];
      //수정할때 필요한 Id값
      res.render("modified_estimate", { authUI: authUI, csrfToken: req.csrfToken(), register_symptons: codeList });
    } catch (error) {
      console.log(error);
    }
  },

  async getDataInModifyPage(req, res) {
    req.session.img = [];
    let decoded = getDataFromToken(req, res);
    let response = await registerSymController.findImageBeforeModified(req, res);
    if (response === null) return res.json({ state: false });
    for (let i = 0; i < response.img.length; i++) {
      req.session.img.push(response.img[i]);
    }
    res.status(200).json({ response: response, email: decoded, img: req.session.img });
  },

  modifyDeleteSessionimg(req, res) {
    req.session.img.splice(req.session.img.indexOf(req.body.data), 1);
    res.json(req.session.img);
  },

  modifySessionImg(req: any, res, next) {
    let decoded = getDataFromToken(req, res);
    modifiedUpload(req, res, (err: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json({ img: req.session.img, email: decoded });
    });
  },

  modifyMoreSessionImg(req: any, res, next) {
    let decoded = getDataFromToken(req, res);
    modifiedReupload(req, res, (err: any) => {
      if (err) {
        console.error(err);
        return;
      }
      res.json({ img: req.session.img, email: decoded });
    });
  },

  modifyProcess(req, res) {
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
      return res.redirect("/web/mypage");
    });
  },

  verifyPhoneNumber(req, res) {
    sendPhone(res, "authorization", req.params.number);
  },

  logout(req, res) {
    res.clearCookie("jwttoken", { path: "/web" });
    return res.redirect(req.get("Referrer"));
  },
};

export default webController;
