let SaltInfo = require("../../lib/model/saltinfo");
const sanitize = require("mongo-sanitize");
let saltController = {};
const crypto = require("crypto");
let cryptoCre = require("../../config/crypto.json");

saltController.show = function (req, res) {
  SaltInfo.findOne({ email: sanitize(req.body) })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

saltController.save = (data) => {
  let salt = new SaltInfo(data);
  salt
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

saltController.find = (req, res, email, pwd) => {
  SaltInfo.find({ email: sanitize(req.body.email) })
    .then((result) => {
      crypto.pbkdf2(
        req.body.pwd,
        result[0].salt,
        cryptoCre.num,
        cryptoCre.len,
        cryptoCre.sys,
        (err, key) => {
          if (email === req.body.email && key.toString("base64") === pwd) {
            let hour = 3600000;
            req.session.cookie.expires = new Date(Date.now() + 5 * hour);
            req.session.logined = true;
            responseData = { state: true };
            res.json(responseData);
          } else {
            responseData = {
              state: "false2",
              msg: "로그인 정보가 일치하지 않습니다.",
            };
            res.json(responseData);
            return;
          }
        }
      );
    })
    .catch((err) => {
      console.log(err);
    });
};

saltController.update = (req, res, new_salt) => {
  console.log(req.body);
  SaltInfo.updateOne(
    { email: req.body.reset_email },
    { $set: { salt: new_salt } },
    { returnNewDocument: true }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = saltController;
