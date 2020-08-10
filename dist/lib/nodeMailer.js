"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mailCre = require("../config/mailer.json");
var nodemailer_1 = __importDefault(require("nodemailer"));
function mail(mailOption) {
    var transpoter = nodemailer_1.default.createTransport({
        service: "naver",
        port: 465,
        // secure: secure, ssl 적용하고
        auth: {
            user: mailCre.email,
            pass: mailCre.pwd,
        },
    });
    transpoter.sendMail(mailOption, function (err, info) {
        //에러가 있으면 알려줘여함
        //코드작성
        if (err) {
            console.log(err);
        }
        else {
            // console.log(info);
        }
    });
}
exports.default = mail;
//# sourceMappingURL=nodeMailer.js.map