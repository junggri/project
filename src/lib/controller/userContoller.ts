import user from "../../lib/model/usermodel";
let userController: any = {};

userController.tokenUpdate = (req: any, res: any, _email: string, _refresh_token: string) => {
  user
    .updateOne({ email: _email }, { $set: { refresh_token: _refresh_token } })
    .then((result: any) => {
      console.log("토큰 재발급했어요");
      res.redirect("/");
    })
    .catch((err: any) => {
      console.error(err);
    });
};

userController.findToken = () => {};
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

export default userController;
