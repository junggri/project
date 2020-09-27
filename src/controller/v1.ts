import express, { Request, Response, NextFunction } from "express";
import { verify, isLogined } from "../lib/jwtverify";
import csrf from "csurf";
import auth from "../lib/authStatus";
import userController from "../model/controller/userContoller";
import provideController from "../model/controller/provideController";
import { symptonList } from "../lib/symptonList";
import { encrypt, decrypt } from "../lib/setAndGetCookie";
import bodyParser from "body-parser";
import mail from "../lib/nodeMailer";
import crypto from "crypto";
import mailCre from "../config/mailer.json";
const parseForm = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf({ cookie: true });

const router = express.Router();

router.get("/find_user_email", csrfProtection, verify, isLogined, (req, res) => {
  let authUI = auth.status(req, res);
  return res.render("findUserEmail", { authUI: authUI, csrfToken: req.csrfToken() });
});

router.get("/find_user_pwd", csrfProtection, verify, isLogined, (req, res) => {
  let authUI = auth.status(req, res);
  return res.render("findUserPwd", { authUI: authUI, csrfToken: req.csrfToken() });
});

router.post("/check_user_email", parseForm, csrfProtection, verify, isLogined, async (req, res) => {
  let result = await userController.find(req.body.email);
  if (result.length === 0) {
    //회원정보가 존재하지 않습니다.
    return res.json({ state: false, inputdata: req.body.email });
  } else {
    return res.json({ state: true, email: result[0].email });
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
          <a href="http://localhost:3000/v1/reset?reto=${token}&email=${encryptResult}">비밀번호 초기화</a>`,
  };
  if (result.length === 0) {
    return res.json({ state: false, inputdata: req.body.email });
  } else {
    res.cookie("rs_to", token, { httpOnly: true, expires: new Date(Date.now() + 60000 * 5) });
    mail(mailOption);
    return res.json({ state: "can-reset" });
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
  await userController.resetPassword(req, res);
});

router.post("/setUserEmailCookie", csrfProtection, verify, (req, res) => {
  if (req.body.state === "set") {
    const encryptResult = encrypt(req.body.email);
    res.json({ email: encryptResult });
  } else {
    const decryptResult = decrypt(req.body.email);
    res.json({ decrypt: decryptResult });
  }
});

export default router;
