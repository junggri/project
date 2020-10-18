import express from "express";
import { verify, isLogined } from "../lib/jwtverify";
import csrf from "csurf";
import bodyParser from "body-parser";
import commonController from "../controller/commonController";
const parseForm = bodyParser.urlencoded({ extended: false });
const csrfProtection = csrf({ cookie: true });
const router = express.Router();

router.get("/find/user/email", csrfProtection, verify, isLogined, commonController.fundUserEmail);

router.get("/find/user/pwd", csrfProtection, verify, isLogined, commonController.findUserPwd);

router.get("/check/users/email/:email", parseForm, csrfProtection, verify, isLogined, commonController.checkUserEmail);

router.get("/send/users/email/:email", parseForm, csrfProtection, verify, isLogined, commonController.checkAndSendEmail);

router.get("/reset", csrfProtection, verify, commonController.reset);

router.post("/reset/process", csrfProtection, verify, isLogined, commonController.resetProcess);

router.get("/users/:email/cookie/:state", csrfProtection, verify, commonController.getAndSetEmail);

export default router;
