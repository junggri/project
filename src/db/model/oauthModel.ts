import auth from "../schema/oauthModel";
import { Request, Response, NextFunction } from "express";
let passportController: any = {};

interface UserData {
  oauth_email: string;
  oauth_name: string;
  id: string;
}

passportController.find = async (email: string) => {
  let result = await auth.findOne({ email: email });
  return result;
};

passportController.save = async (req: Request, res: Response, data: UserData) => {
  let result = await auth.find({ email: data.oauth_email });
  let userData = {
    email: data.oauth_email,
    oauth_id: data.id,
    name: data.oauth_name,
  };
  if (result.length === 0) {
    let newOauth: any = await new auth(userData).save();
    return res.redirect("/");
  }
};

passportController.tokenUpdate = async (req: Request, res: Response, _email: string, _refresh_token: string, id: string) => {
  auth
    .updateOne({ _id: id }, { $set: { refresh_token: _refresh_token } })
    .then((result) => {
      console.log("토큰 재발급했어요");
      return res.redirect("/");
    })
    .catch((err) => {
      console.error(err);
    });
};

export default passportController;
