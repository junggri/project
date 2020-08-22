"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = __importDefault(require("request"));
var CryptoJS = require("crypto-js");
var resultCode;
function sendVerifyNumver(req, res) {
    var randomArray = [];
    for (var i = 0; i < 6; i++) {
        var randomNum = Math.floor(Math.random() * 10);
        randomArray.push(randomNum);
    }
    var user_phone_number = req.body.user_phone_number;
    var user_auth_number = randomArray.join("");
    var date = Date.now().toString();
    var uri = process.env.PHONE_URI;
    var secretKey = process.env.PHONE_SECRET;
    var accessKey = process.env.PHONE_ACCESS;
    var method = "POST";
    var space = " ";
    var newLine = "\n";
    var url = "https://sens.apigw.ntruss.com/sms/v2/services/" + uri + "/messages";
    var url2 = "/sms/v2/services/" + uri + "/messages";
    var hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
    hmac.update(method);
    hmac.update(space);
    hmac.update(url2);
    hmac.update(newLine);
    hmac.update(date);
    hmac.update(newLine);
    hmac.update(accessKey);
    var hash = hmac.finalize();
    var signature = hash.toString(CryptoJS.enc.Base64);
    request_1.default({
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
            content: "\uC778\uC99D\uBC88\uD638 " + user_auth_number + " \uC785\uB2C8\uB2E4.",
            messages: [
                {
                    to: "" + user_phone_number,
                },
            ],
        },
    }, function (err, res, html) {
        if (err)
            console.log(err);
        else {
            resultCode = 200;
            console.log(1, html);
        }
    });
    res.json({ verify_num: user_auth_number });
}
exports.default = sendVerifyNumver;
//# sourceMappingURL=sendPhone.js.map