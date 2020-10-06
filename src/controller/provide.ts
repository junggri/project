import express from "express";
import bodyParser from "body-parser";
import csrf from "csurf";
import auth from "../lib/p_authStatus";
import jwt from "jsonwebtoken";
import { verify, isLogined, isNotLogined } from "../lib/p_verify";
import { createToken } from "../lib/p_accesstoken";
import refreshToken from "../lib/p_refreshtoken";
import mongoSanitize from "mongo-sanitize";
import crypto from "crypto";
import crypto_cre from "../config/crypto.json";
import providers from "../model/schema/provideModel";
import provideController from "../model/controller/provideController";
import providerGotController from "../model/controller/providerGotController";
import registerSymController from "../model/controller/registerSymptonContoller";
import submitController from "../model/controller/submitController";
import { MakeAllSymptonList, MakePagination, showSubmitList, showGottList } from "../lib/p_MakeSymptonList";
import { makeLocation, makeImg, makeBtn } from "../lib/p_makeShowData";
import mysql from "../lib/mysql";
import qs from "querystring";
import noCache from "nocache";
import { makeJuso } from "../lib/p_makeJuso";

const parseForm = bodyParser.urlencoded({ extended: false });
const router = express.Router();
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    // secure: true,
  },
});

interface Decoded {
  email: string;
  user_objectId: string;
  username: string;
}

router.get("/index", csrfProtection, verify, isLogined, (req, res) => {
  if (req.headers.referer === undefined) {
    req.session.referer = "http://localhost:3000/provide/index";
  } else {
    req.session.referer = "http://localhost:3000/provide/findAllRegister";
  }
  req.session.save(() => {
    res.render("providers/index", { csrfToken: req.csrfToken() });
  });
});

router.post("/login/process", parseForm, csrfProtection, async (req, res) => {
  let _email = mongoSanitize(req.body.email);
  let _pwd = mongoSanitize(req.body.pwd);
  let result: any = await providers.findOne({ email: { $in: [_email] } });
  try {
    if (result === null) {
      res.status(401).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
    } else {
      let userObjectId = result._id;
      crypto.pbkdf2(_pwd, result.salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, (err, key) => {
        if (key.toString("base64") === result.password) {
          //오케이 로그인 성공했어
          createToken(req, res, _email, result.name, result._id);
          let _refresh_token = refreshToken(req, res, _email, result.name, result._id);
          let save_token = result.refresh_token;
          if (save_token === undefined) {
            provideController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
            return res.status(200).json({ url: "http://localhost:3000/provide/findAllRegister", state: true });
          } else {
            try {
              console.log("리프래쉬 토큰이 있어요");
              jwt.verify(save_token, process.env.JWT_SECRET);
              return res.status(200).json({ url: "http://localhost:3000/provide/findAllRegister", state: true });
            } catch (error) {
              if (error.name === "TokenExpiredError") {
                console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                provideController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
                return res.status(200).json({ url: "http://localhost:3000/provide/findAllRegister", state: true });
              }
            }
          }
        } else {
          res.status(401).json({ msg: "가입되지 않은 이메일 혹은 잘못된 비밀번호입니다.", state: false });
        }
      });
    }
  } catch (error) {
    console.error(error);
  }
});

router.get("/findAllRegister", csrfProtection, verify, isNotLogined, async (req, res) => {
  // submitController.reset();
  let authUI = auth.status(req, res);
  let pageNum;
  let divided_num: number = 15;
  qs.parse(req.url).page === undefined ? (pageNum = 1) : (pageNum = qs.parse(req.url).page);
  if (qs.parse(req.url).sigunguCode !== undefined && qs.parse(req.url).sigunguCode !== "0") {
    let data = await registerSymController.getSpecificData(pageNum, qs.parse(req.url).sigunguCode, qs.parse(req.url).sigungu, qs.parse(req.url).bname, divided_num);
    let allData = await registerSymController.makeSpecificPagination(pageNum, qs.parse(req.url).sigunguCode, qs.parse(req.url).sigungu, qs.parse(req.url).bname, divided_num);
    let _AllSympton = MakeAllSymptonList(data, pageNum, divided_num);
    let pagination = MakePagination(req, res, allData, divided_num);
    makeJuso(req, res, authUI, _AllSympton, pagination);
  } else {
    let data = await registerSymController.getAllData(pageNum, divided_num);
    let allData = await registerSymController.makePagination();
    let _AllSympton = MakeAllSymptonList(data, pageNum, divided_num);
    let pagination = MakePagination(req, res, allData, divided_num);
    res.render("providers/findAllRegister", { authUI: authUI, csrfToken: req.csrfToken(), list: "", list2: "", AllSympton: _AllSympton, pagination: pagination });
  }
});

router.post("/get_sigungu", csrfProtection, verify, isNotLogined, (req, res) => {
  if (req.body.data === "") return;
  mysql.query(`select 시군구명 from ${req.body.data}`, (err: any, data: any) => {
    let data1 = [];
    if (err) console.error(err);
    for (let i = 0; i < data.length; i++) {
      data1.push(data[i].시군구명);
    }
    res.json({ sido: Array.from(new Set(data1)).sort() });
  });
});

router.post("/get_bname", csrfProtection, verify, isNotLogined, (req, res) => {
  if (req.body.data.sigungu === "") return;
  mysql.query(`select * from ${req.body.data.sido} where 시군구명 = "${req.body.data.sigungu}"`, (err: any, data: any) => {
    let data1 = [];
    if (err) console.error(err);
    for (let i = 0; i < data.length; i++) {
      data1.push(data[i].법정읍면동명);
    }
    res.json({ sido: Array.from(new Set(data1)).sort() });
  });
});

router.post("/get_sejong", csrfProtection, verify, isNotLogined, (req, res) => {
  if (req.body.data === "") return;
  mysql.query(`select * from ${req.body.data}`, (err: any, data: any) => {
    let data1 = [];
    if (err) console.error(err);
    for (let i = 0; i < data.length; i++) {
      data1.push(data[i].법정읍면동명);
    }
    res.json({ sido: Array.from(new Set(data1)).sort() });
  });
});

router.post("/before_check_getRegisterData", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await registerSymController.showBeforeEstimate(req.body._id);
  if (result === null) {
    return res.json({ state: false });
  } else if (result.state === "accept") {
    return res.json({ state: "accept" });
  } else {
    res.json({ data: result, state: true });
  }
});

interface Err {
  message: string;
  stack: string;
  status: number;
}

router.get("/sympton_estimate", csrfProtection, verify, isNotLogined, async (req, res, next) => {
  let authUI = auth.status(req, res);
  const token = req.cookies.pjwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let result = await registerSymController.showBeforeEstimate(req.url.split("?")[1]);
    // let submitState = await submitController.getState(req.url.split("?")[1], (decoded as Decoded).user_objectId);
    if (result === null) {
      let err: unknown = new Error("잘못된 접근입니다");
      (err as Err).message = "잘못된 접근입니다.";
      (err as Err).stack = "삭제된 증상입니다";
      (err as Err).status = 404;
      next(err);
      return;
    }
    let isEstimated = await provideController.isEstimated((decoded as Decoded).user_objectId);
    let location = makeLocation(result);
    let imgs = makeImg(result);
    let btn = makeBtn(isEstimated, req.url.split("?")[1]);
    res.render("providers/showBeforeEstimate", { authUI: authUI, csrfToken: req.csrfToken(), Location: location, imgs: imgs, btn: btn });
  } catch (error) {
    console.error(error);
  }
});

router.post("/get_registerData", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await registerSymController.showBeforeEstimate(req.body.sympton_id);
  if (result === null) return res.json({ state: false });
  res.json({ state: true, data: result });
});

router.post("/submit_estimate", csrfProtection, verify, isNotLogined, async (req, res) => {
  const token = req.cookies.pjwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let submit = await registerSymController.isFullSubmit(req.body);
    if (submit === null) return res.json({ state: null });
    if (submit.provider.length >= 20) return res.json({ state: false });
    await submitController.save(req.body.sympton_id, (decoded as Decoded).user_objectId, req.body);
    res.json({ state: true, url: req.body.sympton_id });
  } catch (error) {
    console.error(error);
  }
});

router.post("/delete_submit", csrfProtection, verify, isNotLogined, async (req, res, next) => {
  const token = req.cookies.pjwttoken;
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let result: any = await registerSymController.showBeforeEstimate(req.body.symptonId);
    if (result === null) return res.json({ state: null });
    submitController.delete_submit(req, res, req.body.symptonId, (decoded as Decoded).user_objectId);
  } catch (error) {
    console.error(error);
  }
});

router.get("/mypage", csrfProtection, verify, isNotLogined, (req, res) => {
  let authUI = auth.status(req, res);
  const token = req.cookies.pjwttoken;
  let decoded = jwt.verify(token, process.env.JWT_SECRET);
  try {
    res.render("providers/p_mypage", { authUI: authUI, csrfToken: req.csrfToken(), username: (decoded as Decoded).username, useremail: (decoded as Decoded).email });
  } catch (error) {}
});

router.get("/showsubmit", csrfProtection, verify, isNotLogined, async (req, res) => {
  const token = req.cookies.pjwttoken;
  let authUI = auth.status(req, res);
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let data = await submitController.getDataFromProviderId((decoded as Decoded).user_objectId);
    let list = showSubmitList(data);
    res.render("providers/showsubmit", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
  } catch (error) {}
});

router.post("/showSubmitFlag", csrfProtection, verify, isNotLogined, async (req, res) => {
  let result = await submitController.findSubmit(req.body.submitId);
  return res.json({ state: result.state, symptonId: result.symptonId });
});

router.get("/showGotEstimate", csrfProtection, verify, isNotLogined, async (req, res) => {
  const token = req.cookies.pjwttoken;
  let authUI = auth.status(req, res);
  try {
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    let data = await providerGotController.findProvider((decoded as Decoded).user_objectId);
    let list = showGottList(data);
    res.render("providers/showGotEstimate", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
  } catch (error) {
    console.error(error);
  }
});

router.post("/logout", isNotLogined, (req, res) => {
  res.clearCookie("pjwttoken", { path: "/provide" });
  return res.redirect(req.get("Referrer"));
});

export default router;