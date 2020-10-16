import express, { Request, Response, NextFunction } from "express";
import csrf from "csurf";
import bodyParser from "body-parser";
import { verify, isLogined, isNotLogined } from "../lib/jwtverify";
import noCache from "nocache";
import webController from "../controller/webController";
const parseForm = bodyParser.urlencoded({ extended: false });
const router = express.Router();
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    // secure: true,
  },
});

router.get("/index", csrfProtection, verify, webController.index);

router.get("/estimate", verify, csrfProtection, webController.estimate);

router.get("/login", csrfProtection, verify, isLogined, webController.login);

router.post("/users/login", parseForm, csrfProtection, webController.userLogin);

router.get("/register/previous", csrfProtection, verify, isLogined, webController.registerPrevious);

router.get("/register/:way", csrfProtection, verify, isLogined, webController.registerHow);

router.post("/register/common/process", parseForm, csrfProtection, verify, isLogined, webController.commonUserRegister);

router.post("/register/provide/process", parseForm, csrfProtection, verify, isLogined, webController.providerRegister);

router.get("/check/duplicate/:email", parseForm, csrfProtection, verify, isLogined, webController.checkDuplicateEmail);

router.get("/check/provider/duplicate/:email", parseForm, csrfProtection, verify, isLogined, webController.checkDuplicateProviderEmail);

router.get("/user/check/login", parseForm, csrfProtection, webController.checkBeforeLogin);

router.get("/write/sympton", csrfProtection, verify, isNotLogined, webController.writeSympton);

router.get("/users/session", parseForm, csrfProtection, verify, webController.getUserSession);

router.post("/delete/session/img", parseForm, csrfProtection, verify, webController.deleteSessionImg);

router.post("/add/session/img", verify, webController.addSessionImg);

router.post("/add/session/img/more", verify, webController.addMoreSesionImg);

router.post("/register/users/sympton", parseForm, csrfProtection, verify, webController.registerSympton);

router.get("/mypage", csrfProtection, verify, isNotLogined, webController.mypage);

router.get("/mypage/showestimate", csrfProtection, verify, isNotLogined, noCache(), webController.mypageShowEstimate);

router.delete("/delete/sympton", parseForm, csrfProtection, isNotLogined, webController.deleteSympton);

router.get("/find/:symptons/provider", csrfProtection, verify, isNotLogined, webController.findSymptonsProvider);

router.get("/data/submit/:submitid", csrfProtection, verify, isNotLogined, webController.getSubmitData);

router.get("/show/providers/:id", csrfProtection, verify, isNotLogined, webController.showProviders);

router.get("/check/reigister/state/:registerid", csrfProtection, verify, isNotLogined, webController.checkRegistersState);

router.get("/find/providers/submit/:submitid", csrfProtection, verify, isNotLogined, webController.findSubmit);

router.post("/acception/submit", csrfProtection, verify, isNotLogined, webController.acceptSubmit);

router.get("/modifiment/estimate/:id", csrfProtection, verify, isNotLogined, webController.modifiyEstimatePage);

router.get(`/data/modify/:id`, verify, isNotLogined, webController.getDataInModifyPage);

router.post("/modify/delete/session/img", parseForm, csrfProtection, verify, isNotLogined, webController.modifyDeleteSessionimg);

router.post("/modify/session/img", verify, webController.modifySessionImg);

router.post("/modify/session/img/more", verify, webController.modifyMoreSessionImg);

router.post("/modified/estimate/process", parseForm, csrfProtection, verify, isNotLogined, webController.modifyProcess);

router.get("/verify/phone/number/:number", csrfProtection, verify, isLogined, webController.verifyPhoneNumber);

router.post("/logout", isNotLogined, webController.logout);

export default router;
