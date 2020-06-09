"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserInfo = require("../../lib/model/userinfo");
var userController = {};
function expires(req, res) {
    var hour = 3600000;
    req.session.cookie.expires = new Date(Date.now() + 3 * hour);
}
userController.find = function (req, res) {
    UserInfo.findOne({ oauth_id: req.session.passport.user.id })
        .then(function (result) {
        if (result === null) {
            res.redirect("/auth/register_user");
        }
        else {
            req.session.save(function () {
                expires(req, res);
                req.session.logined = true;
                res.redirect("/");
            });
        }
    })
        .catch(function (err) {
        console.log(err);
    });
};
userController.save = function (req, res) {
    var users = new UserInfo(req.body);
    users
        .save()
        .then(function (result) {
        req.session.save(function () {
            req.session.logined = true;
            res.redirect("/");
        });
    })
        .catch(function (err) {
        console.log(err);
    });
};
exports.default = userController;
//# sourceMappingURL=userinfoContoller.js.map