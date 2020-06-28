"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reupload = exports.upload = void 0;
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
exports.upload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload/");
        },
        filename: function (req, file, cb) {
            var filename = new Date().valueOf() + path_1.default.extname(file.originalname);
            cb(null, filename);
            req.session.img.push(filename);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
}).array("data", 10);
exports.reupload = multer_1.default({
    storage: multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload/");
        },
        filename: function (req, file, cb) {
            var filename = new Date().valueOf() + path_1.default.extname(file.originalname);
            cb(null, filename);
            if (req.session.img.length < 10) {
                req.session.img.push(filename);
            }
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
}).array("data");
//# sourceMappingURL=multer.js.map