import express from "express";
import bodyParser from "body-parser";
import csrf from "csurf";
import { verify, isLogined, isNotLogined } from "../lib/p_verify";
import provide from "../controller/providerController";
const parseForm = bodyParser.urlencoded({ extended: false });
const router = express.Router();
const csrfProtection = csrf({
  cookie: {
    httpOnly: true,
    // secure: true,
  },
});

router.get("/main", csrfProtection, verify, isLogined, provide.main);

router.post("/users/login", parseForm, csrfProtection, provide.loginProcess);

router.get("/show/items", csrfProtection, verify, isNotLogined, provide.showItems);

router.get("/get/sigungu/:data", csrfProtection, verify, isNotLogined, provide.getSigungu);

router.get("/get/bname/:sido/:sigungu", csrfProtection, verify, isNotLogined, provide.getBname);

router.get("/get/sejong/:data", csrfProtection, verify, isNotLogined, provide.getSejong);

router.get("/check/state/item/:registerId", csrfProtection, verify, isNotLogined, provide.checkStateRegisterState);

router.get("/sympton", csrfProtection, verify, isNotLogined, provide.symptonEstimate);

router.get("/get/data/item/:registerId", csrfProtection, verify, isNotLogined, provide.getRegisterData);

router.post("/submit/estimate/process", csrfProtection, verify, isNotLogined, provide.submitEstimate);

router.delete("/delete/submit", csrfProtection, verify, isNotLogined, provide.deleteSubmit);

router.get("/mypage", csrfProtection, verify, isNotLogined, provide.mypage);

router.get("/submit", csrfProtection, verify, isNotLogined, provide.showSubmit);

router.get("/check/flags/submit/:submitId", csrfProtection, verify, isNotLogined, provide.showSubmitFlag);

router.get("/user/send", csrfProtection, verify, isNotLogined, provide.showGotEstimate);

router.post("/logout", isNotLogined, provide.logout);

export default router;
