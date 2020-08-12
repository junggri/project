import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";
import jwt from "jsonwebtoken";

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const token = req.cookies.jwttoken;
      try {
        let decoded: any = jwt.verify(token, process.env.JWT_SECRET);
        cb(null, `upload/${decoded.user_objectId}`);
      } catch (error) {
        console.error(error);
      }
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      req.session.img.push(filename);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
}).array("data", 10);

export const reupload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const token = req.cookies.jwttoken;
      try {
        let decoded: any = jwt.verify(token, process.env.JWT_SECRET);
        cb(null, `upload/${decoded.user_objectId}`);
      } catch (error) {
        console.error(error);
      }
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      if (req.session.img.length < 10) {
        req.session.img.push(filename);
      }
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
}).array("data");

export const modifiedUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const token = req.cookies.jwttoken;
      try {
        let decoded: any = jwt.verify(token, process.env.JWT_SECRET);
        cb(null, `upload/${decoded.user_objectId}`);
      } catch (error) {
        console.error(error);
      }
    },
    filename: async function (req: Request, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      req.session.img.push(filename);
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
}).array("data", 10);

export const modifiedReupload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const token = req.cookies.jwttoken;
      try {
        let decoded: any = jwt.verify(token, process.env.JWT_SECRET);
        cb(null, `upload/${decoded.user_objectId}`);
      } catch (error) {
        console.error(error);
      }
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      if (req.session.img.length < 10) {
        req.session.img.push(filename);
      }
    },
  }),
  limits: { fileSize: 20 * 1024 * 1024 },
}).array("data");
