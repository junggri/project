"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = require("../../lib/model/usermodel");
var userController = {};
userController.tokenUpdate = function (req, res, _email, _refresh_token) {
    user
        .updateOne({ email: _email }, { $set: { refresh_token: _refresh_token } })
        .then(function (result) {
        res.redirect("/");
    })
        .catch(function (err) {
        console.error(err);
    });
};
userController.findToken = function () { };
// userController.find = function (req, res) {
//   UserInfo.findOne({ oauth_id: req.session.passport.user.id })
//     .then((result) => {
//       if (result === null) {
//         res.redirect("/auth/register_user");
//       } else {
//         req.session.save(function () {
//           req.session.logined = true;
//           res.redirect("/");
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// userController.save = (req, res) => {
//   let users = new UserInfo(req.body);
//   users
//     .save()
//     .then((result) => {
//       req.session.save(() => {
//         req.session.logined = true;
//         res.redirect("/");
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
exports.default = userController;
//# sourceMappingURL=userContoller.js.map