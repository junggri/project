import user from "../schema/usermodel";
import crypto from "crypto";
import crypto_cre from "../../config/crypto.json";
let userController: any = {};

userController.tokenUpdate = (req: any, res: any, _email: string, _refresh_token: string, userObjectId: string) => {
  user
    .updateOne({ _id: userObjectId }, { $set: { refresh_token: _refresh_token } })
    .then((result: any) => {
      console.log("토큰 재발급했어요");
    })
    .catch((err: any) => {
      console.error(err);
    });
};
userController.find = async (email: string) => {
  let result = user.find({ email: email });
  return result;
};
userController.findToken = () => {};

userController.resetPassword = async (req: any, res: any) => {
  crypto.randomBytes(crypto_cre.len, async (err, buf) => {
    let salt = buf.toString("base64");
    crypto.pbkdf2(req.body.pwd1, salt, crypto_cre.num, crypto_cre.len, crypto_cre.sys, async (err, key) => {
      await user.updateOne({ email: req.body.email }, { $set: { password: key.toString("base64"), salt: salt } });
    });
  });
};

export default userController;
