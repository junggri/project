import { Request, Response, NextFunction } from "express";
import auth from "../lib/p_authStatus";
import jwt from "jsonwebtoken";
import { createToken } from "../lib/p_accesstoken";
import refreshToken from "../lib/p_refreshtoken";
import mongoSanitize from "mongo-sanitize";
import crypto from "crypto";
import crypto_cre from "../config/crypto.json";
import providers from "../db/schema/provideModel";
import provideController from "../db/model/provideModel";
import providerGotController from "../db/model/providerGotModel";
import registerSymController from "../db/model/registerSymptonModel";
import submitController from "../db/model/submitModel";
import { MakeAllSymptonList, MakePagination, showSubmitList, showGottList } from "../lib/p_MakeSymptonList";
import { makeLocation, makeImg, makeBtn } from "../lib/p_makeShowData";
import pool from "../lib/mysql-jusoLIst";
import qs from "querystring";
import { makeJuso } from "../lib/p_makeJuso";
import { Decoded, Err } from "../interface/all_interface";
import user from "../lib/mysql-test";

interface ProviderController {
  main(req: Request, res: Response): void;
  loginProcess(req: Request, res: Response): void;
  showItems(req: Request, res: Response): void;
  getSigungu(req: Request, res: Response): void;
  getBname(req: Request, res: Response): void;
  getSejong(req: Request, res: Response): void;
  checkStateRegisterState(req: Request, res: Response): void;
  symptonEstimate(req: Request, res: Response, next: NextFunction): void;
  getRegisterData(req: Request, res: Response): void;
  submitEstimate(req: Request, res: Response): void;
  deleteSubmit(req: Request, res: Response, next: NextFunction): void;
  mypage(req: Request, res: Response): void;
  showSubmit(req: Request, res: Response): void;
  showSubmitFlag(req: Request, res: Response): void;
  showGotEstimate(req: Request, res: Response): void;
  logout(req: Request, res: Response): void;
}

let providerController: ProviderController = {
  async main(req: Request, res: Response) {
    if (req.headers.referer === undefined) {
      req.session.referer = "http://localhost:3000/provide/main";
    } else {
      req.session.referer = "http://localhost:3000/provide/show/items";
    }
    req.session.save(() => {
      res.render("providers/main", { csrfToken: req.csrfToken() });
    });
  },

  async loginProcess(req, res) {
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
              return res.status(200).json({ url: "http://localhost:3000/provide/show/items", state: true });
            } else {
              try {
                console.log("리프래쉬 토큰이 있어요");
                jwt.verify(save_token, process.env.JWT_SECRET);
                return res.status(200).json({ url: "http://localhost:3000/provide/show/items", state: true });
              } catch (error) {
                if (error.name === "TokenExpiredError") {
                  console.log("토큰이 있는데 유효하지 않아서 재발급할겡");
                  provideController.tokenUpdate(req, res, _email, _refresh_token, userObjectId);
                  return res.status(200).json({ url: "http://localhost:3000/provide/show/items", state: true });
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
  },

  async showItems(req, res) {
    // let reuslt = await pool.getConnection(async (conn: any) => conn);
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
      res.render("providers/show-item", { authUI: authUI, csrfToken: req.csrfToken(), list: "", list2: "", AllSympton: _AllSympton, pagination: pagination });
    }
  },

  async getSigungu(req, res) {
    if (req.params.data === "") return;
    pool.query(`select 시군구명 from ${req.params.data}`, (err: any, data: any) => {
      let data1 = [];
      if (err) console.error(err);
      for (let i = 0; i < data.length; i++) {
        data1.push(data[i].시군구명);
      }
      res.json({ sido: Array.from(new Set(data1)).sort() });
    });
  },

  getBname(req, res) {
    if (req.params.sigungu === "") return;
    pool.query(`select * from ${req.params.sido} where 시군구명 = "${req.params.sigungu}"`, (err: any, data: any) => {
      let data1 = [];
      if (err) console.error(err);
      for (let i = 0; i < data.length; i++) {
        data1.push(data[i].법정읍면동명);
      }
      res.json({ sido: Array.from(new Set(data1)).sort() });
    });
  },

  getSejong(req, res) {
    if (req.params.data === "") return;
    pool.query(`select * from ${req.params.data}`, (err: any, data: any) => {
      let data1 = [];
      if (err) console.error(err);
      for (let i = 0; i < data.length; i++) {
        data1.push(data[i].법정읍면동명);
      }
      res.json({ sido: Array.from(new Set(data1)).sort() });
    });
  },

  async checkStateRegisterState(req, res) {
    let result = await registerSymController.showBeforeEstimate(req.params.registerId);
    if (result === null) {
      return res.json({ state: false });
    } else if (result.state === "accept") {
      return res.json({ state: "accept" });
    } else {
      res.json({ data: result, state: true });
    }
  },

  async symptonEstimate(req, res, next) {
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
      res.render("providers/before-estimate", { authUI: authUI, csrfToken: req.csrfToken(), Location: location, imgs: imgs, btn: btn });
    } catch (error) {
      console.error(error);
    }
  },

  async getRegisterData(req, res) {
    let result = await registerSymController.showBeforeEstimate(req.params.registerId);
    if (result === null) return res.json({ state: false });
    res.json({ state: true, data: result });
  },

  async submitEstimate(req, res) {
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
  },

  async deleteSubmit(req, res, next) {
    const token = req.cookies.pjwttoken;
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      let result: any = await registerSymController.showBeforeEstimate(req.body.symptonId);
      if (result === null) return res.json({ state: null });
      submitController.delete_submit(req, res, req.body.symptonId, (decoded as Decoded).user_objectId);
    } catch (error) {
      console.error(error);
    }
  },

  mypage(req, res) {
    let authUI = auth.status(req, res);
    const token = req.cookies.pjwttoken;
    let decoded = jwt.verify(token, process.env.JWT_SECRET);
    try {
      res.render("providers/mypage", { authUI: authUI, csrfToken: req.csrfToken(), username: (decoded as Decoded).username, useremail: (decoded as Decoded).email });
    } catch (error) {}
  },

  async showSubmit(req, res) {
    const token = req.cookies.pjwttoken;
    let authUI = auth.status(req, res);
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      let data = await submitController.getDataFromProviderId((decoded as Decoded).user_objectId);
      let list = showSubmitList(data);
      res.render("providers/show-submit", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
    } catch (error) {}
  },

  async showSubmitFlag(req, res) {
    let result = await submitController.findSubmit(req.params.submitId);
    console.log(result);
    return res.json({ state: result.state, symptonId: result.symptonId });
  },

  async showGotEstimate(req, res) {
    const token = req.cookies.pjwttoken;
    let authUI = auth.status(req, res);
    try {
      let decoded = jwt.verify(token, process.env.JWT_SECRET);
      let data = await providerGotController.findProvider((decoded as Decoded).user_objectId);
      let list = showGottList(data);
      res.render("providers/user-send", { authUI: authUI, csrfToken: req.csrfToken(), list: list });
    } catch (error) {
      console.error(error);
    }
  },

  logout(req, res) {
    res.clearCookie("pjwttoken", { path: "/provide" });
    return res.redirect(req.get("Referrer"));
  },
};

export default providerController;
