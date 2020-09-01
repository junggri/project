import request from "request";
let CryptoJS = require("crypto-js");
let resultCode: any;
let _content: string;

export default function sendVerifyNumver(req: any, res: any, state: string, phone_num: string) {
  let randomArray = [];
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    randomArray.push(randomNum);
  }
  let user_phone_number = phone_num;
  let user_auth_number = randomArray.join("");

  const date = Date.now().toString();
  const uri = process.env.PHONE_URI;
  const secretKey = process.env.PHONE_SECRET;
  const accessKey = process.env.PHONE_ACCESS;
  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${uri}/messages`;
  const url2 = `/sms/v2/services/${uri}/messages`;

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);

  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);

  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);

  if (state === "alert") {
    _content = "회원님의 견적을 수락하셨습니다.";
  } else {
    _content = `인증번호 ${user_auth_number} 입니다.`;
  }

  request(
    {
      method: method,
      json: true,
      uri: url,
      headers: {
        "Contenc-type": "application/json; charset=utf-8",
        "x-ncp-iam-access-key": accessKey,
        "x-ncp-apigw-timestamp": date,
        "x-ncp-apigw-signature-v2": signature,
      },
      body: {
        type: "SMS",
        countryCode: "82",
        from: process.env.PHONE_NUMBER,
        content: _content,
        messages: [
          {
            to: `${user_phone_number}`,
          },
        ],
      },
    },
    (err: any, res: any, html: any) => {
      if (err) console.log(err);
      else {
        resultCode = 200;
        console.log(1, html);
      }
    }
  );

  if (state === "authorization") {
    return res.json({ verify_num: user_auth_number });
  } else {
    return res.json({ state: true });
  }
}
