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

router.get("/index", csrfProtection, verify, isLogined, provide.index);

router.post("/login/process", parseForm, csrfProtection, provide.loginProcess);

router.get("/findAllRegister", csrfProtection, verify, isNotLogined, provide.findAllRegister);

router.post("/get_sigungu", csrfProtection, verify, isNotLogined, provide.getSigungu);

router.post("/get_bname", csrfProtection, verify, isNotLogined, provide.getBname);

router.post("/get_sejong", csrfProtection, verify, isNotLogined, provide.getSejong);

router.post("/before_check_getRegisterData", csrfProtection, verify, isNotLogined, provide.checkBeoforeReigsterData);

router.get("/sympton_estimate", csrfProtection, verify, isNotLogined, provide.symptonEstimate);

router.post("/get_registerData", csrfProtection, verify, isNotLogined, provide.getRegisterData);

router.post("/submit_estimate", csrfProtection, verify, isNotLogined, provide.submitEstimate);

router.post("/delete_submit", csrfProtection, verify, isNotLogined, provide.deleteSubmit);

router.get("/mypage", csrfProtection, verify, isNotLogined, provide.mypage);

router.get("/showsubmit", csrfProtection, verify, isNotLogined, provide.showSubmit);

router.post("/showSubmitFlag", csrfProtection, verify, isNotLogined, provide.showSubmitFlag);

router.get("/showGotEstimate", csrfProtection, verify, isNotLogined, provide.showGotEstimate);

router.post("/logout", isNotLogined, provide.logout);

export default router;
