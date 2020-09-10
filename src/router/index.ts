import express, { Request, Response, NextFunction } from "express";
import { verify, isLogined } from "../lib/jwtverify";
import csrf from "csurf";
import auth from "../lib/authStatus";
import bodyParser from "body-parser";
import { symptonList } from "../lib/symptonList";
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });
const router = express.Router();

router.get("/", csrfProtection, verify, (req, res, next) => {
  let authUI = auth.status(req, res);
  res.render("index", { authUI: authUI });
});

router.get("/estimate", verify, csrfProtection, (req, res, next) => {
  let authUI = auth.status(req, res);
  if (req.session.code !== undefined) delete req.session.code;
  symptonList().then((result) => {
    res.render("estimate", { authUI: authUI, csrfToken: req.csrfToken(), list: result });
  });
});

export default router;
