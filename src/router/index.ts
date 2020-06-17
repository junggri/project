import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import { verify, isLogined } from "../lib/jwtverify";
import auth from "../lib/authStatus";

router.get("/", verify, (req, res, next) => {
  console.log(req.session);
  let authUI = auth.status(req, res);
  res.render("index", { authUI: authUI });
});

router.get("/estimate", verify, (req, res, next) => {
  let authUI = auth.status(req, res);
  res.render("estimate", { authUI: authUI });
});

export default router;
