import { Request, Response, NextFunction } from "express";
import auth from "../lib/authStatus";
import userController from "../db/model/userModel";
import { encrypt, decrypt } from "../lib/setAndGetCookie";
import mail from "../lib/nodeMailer";
import crypto from "crypto";
import mailCre from "../config/mailer.json";

interface CommonController {
  fundUserEmail(req: Request, res: Response): void;
  findUserPwd(req: Request, res: Response): void;
  checkUserEmail(req: Request, res: Response): void;
  checkAndSendEmail(req: Request, res: Response): void;
  reset(req: Request, res: Response): void;
  resetProcess(req: Request, res: Response): void;
  getAndSetEmail(req: Request, res: Response): void;
}

let commonController: CommonController = {
  fundUserEmail(req, res) {
    let authUI = auth.status(req, res);
    return res.render("findUserEmail", { authUI: authUI, csrfToken: req.csrfToken() });
  },

  findUserPwd(req, res) {
    let authUI = auth.status(req, res);
    return res.render("findUserPwd", { authUI: authUI, csrfToken: req.csrfToken() });
  },

  async checkUserEmail(req, res) {
    let result = await userController.find(req.params.email);
    if (result.length === 0) {
      //회원정보가 존재하지 않습니다.
      return res.status(200).json({ state: false, inputdata: req.params.email });
    } else {
      return res.status(200).json({ state: true, email: result[0].email });
    }
  },

  async checkAndSendEmail(req, res) {
    const encryptResult = encrypt(req.params.email);
    let result = await userController.find(req.params.email);
    let token = crypto.randomBytes(20).toString("hex");
    let mailOption = {
      from: mailCre.email,
      to: req.params.email,
      subject: "비밀번호 재설정 링크입니다..",
      html: `비밀번호 초기화를 위하여 아래의 링크를 클릭해주세요 
            <a href="http://localhost:3000/common/reset?reto=${token}&email=${encryptResult}">비밀번호 초기화</a>`,
    };
    if (result.length === 0) {
      return res.status(200).json({ state: false, inputdata: req.params.email });
    } else {
      res.cookie("rs_to", token, { httpOnly: true, expires: new Date(Date.now() + 60000 * 5) });
      mail(mailOption);
      return res.status(200).json({ state: "can-reset" });
    }
  },

  async reset(req, res) {
    const decryptResult = decrypt(req.query.email as string);
    if (req.cookies.rs_to === req.query.reto) {
      res.render("reset", { csrfToken: req.csrfToken(), email: decryptResult });
    } else {
      return res.status(400).send("잘못된 접근입니다.");
    }
  },

  async resetProcess(req, res) {
    res.clearCookie("rs_to");
    await userController.resetPassword(req, res);
    res.redirect("/web/index");
  },

  getAndSetEmail(req, res) {
    if (req.params.state === "set") {
      const encryptResult = encrypt(req.params.email);
      res.status(200).json({ email: encryptResult });
    } else {
      const decryptResult = decrypt(req.params.email);
      res.status(200).json({ decrypt: decryptResult });
    }
  },
};

export default commonController;
