import request from "request";
let CryptoJS = require("crypto-js");
let resultCode: any;

export default function sendVerifyNumver(req: any, res: any) {
  let randomArray = [];
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    randomArray.push(randomNum);
  }
  let user_phone_number = req.body.user_phone_number;
  let user_auth_number = randomArray.join("");

  const date = Date.now().toString();
  const uri = "ncp:sms:kr:258388484624:authoriztion";
  const secretKey = "iAC8fi4tH0dWVmckGrtMm92drplta6RxUhGnIKzd";
  const accessKey = "cEk7AGKu4h9f72FEzLLC";
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
        from: "01077652103",
        content: `인증번호 ${user_auth_number} 입니다.`,
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
  res.json({ verify_num: user_auth_number });
}
