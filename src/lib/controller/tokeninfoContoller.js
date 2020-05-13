let TokenInfo = require("../model/tokeninfo");
let tokenController = {};
let reset = require("../../lib/template/reset");

tokenController.find = function (req, res, csrfToken) {
  TokenInfo.findOne({ token: req.params.token })
    .then((result) => {
      let html = reset.html(result.email, csrfToken);
      if (req.params.token === result.token) {
        res.send(html);
      }
    })
    .catch((err) => {
      res.status(404).send("유효시간이 끝났습니다. 다시 인증해주세요");
    });
};

tokenController.save = (data) => {
  let token = new TokenInfo(data);
  token
    .save()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

tokenController.delete = (req, res) => {
  TokenInfo.deleteOne({ email: req.body.reset_email }).catch((err) => {
    console.error(err);
  });
};
module.exports = tokenController;
