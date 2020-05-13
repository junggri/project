let UserInfo = require("../../lib/model/userinfo");
let userController = {};

function expires(req, res) {
  let hour = 3600000;
  req.session.cookie.expires = new Date(Date.now() + 3 * hour);
}

userController.find = function (req, res) {
  UserInfo.findOne({ oauth_id: req.session.passport.user.id })
    .then((result) => {
      if (result === null) {
        res.redirect("/auth/register_user");
      } else {
        req.session.save(function () {
          expires(req, res);
          req.session.logined = true;
          res.redirect("/");
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

userController.save = (req, res) => {
  let users = new UserInfo(req.body);
  users
    .save()
    .then((result) => {
      req.session.save(() => {
        req.session.logined = true;
        res.redirect("/");
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = userController;
