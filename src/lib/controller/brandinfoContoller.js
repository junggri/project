const sanitize = require("mongo-sanitize");
let BrandInfo = require("../model/brandinfo");
let brandController = {};
let saltinfoContoller = require("./saltinfoContoller");
let tokeninfoContoller = require("./tokeninfoContoller");
let mailto = require("../nodeMailer");
let responseData;

brandController.find = function (req, res, mailOption, token) {
  let responseData = null;
  BrandInfo.findOne({ email: sanitize(req.body.data) })
    .then((result) => {
      if (result !== null) {
        responseData = { state: true };
        if (req.body.state === "pwd") {
          mailto(mailOption);
          tokeninfoContoller.save({ token: token, email: result.email });
          responseData = { state: "can-reset" };
          res.json(responseData);
          return;
        }
        res.json(responseData);
      } else {
        responseData = { email: req.body.data, state: false };
        res.json(responseData);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

brandController.save = (data) => {
  let brands = new BrandInfo(data);
  brands
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

brandController.checkEmail = (req, res, mailOption, num) => {
  BrandInfo.find({ email: sanitize(req.body.email) })
    .then((result) => {
      if (result.length === 0) {
        mailto(mailOption);
        responseData = {
          state: "사용가능한 이메일입니다.",
          canEnrollment: true,
          validation_num: num.join(""),
        };
        res.json(responseData);
        return;
      } else {
        responseData = {
          state: "이용중인 이메일입니다.",
          canEnrollment: false,
        };
        res.json(responseData);
        return;
      }
    })
    .catch((err) => console.log(err));
};

brandController.login = (req, res) => {
  BrandInfo.find({ email: sanitize(req.body.email) })
    .then((result) => {
      if (result.length === 0) {
        responseData = { state: "false1", msg: "등록되지 않은 아이디입니다." };
        res.json(responseData);
        return;
      } else {
        saltinfoContoller.find(req, res, result[0].email, result[0].password);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

brandController.update = (req, res, new_pwd) => {
  BrandInfo.updateOne(
    { email: req.body.reset_email },
    { $set: { password: new_pwd } },
    { returnNewDocument: true }
  )
    .then((result) => {
      tokeninfoContoller.delete(req, res);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};
// 탈퇴할떄 req.sesssion.logined 도지우기
module.exports = brandController;
