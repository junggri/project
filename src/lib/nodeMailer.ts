let mailCre = require("../config/mailer.json");
import nodemailer from "nodemailer";

export default function mail(mailOption: any) {
  let transpoter = nodemailer.createTransport({
    service: "naver",
    port: 465,
    // secure: secure, ssl 적용하고
    auth: {
      user: mailCre.email,
      pass: mailCre.pwd,
    },
  });
  transpoter.sendMail(mailOption, (err, info) => {
    //에러가 있으면 알려줘여함
    //코드작성
    if (err) {
      console.log(err);
    } else {
      console.log(info.respose);
    }
  });
}
