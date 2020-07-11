import { Request, Response, NextFunction } from "express";
import multer from "multer";
import path from "path";

export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      req.session.img.push(filename);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
}).array("data", 10);

export const reupload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      if (req.session.img.length < 10) {
        req.session.img.push(filename);
      }
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
}).array("data");

export const modifiedUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
    filename: async function (req: Request, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      req.session.img.push(filename);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
}).array("data", 10);

export const modifiedReupload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      if (req.session.img.length < 10) {
        req.session.img.push(filename);
      }
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
}).array("data");
