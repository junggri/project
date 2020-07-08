import users from "../model/usermodel";
import { Request, Response } from "express";
import registerSym from "../model/registerSymModel";
import { makeListSympton } from "../mypageState";
import auth from "../authStatus";

let registerSymController: any = {};

registerSymController.save = (req: any, res: any, data: any, _email: string) => {
  let registerSympton: any = new registerSym(data);
  registerSympton
    .save()
    .then(() => {
      users.findOne({ email: _email }, (err, user) => {
        registerSympton.registrant.push(user);
        registerSympton.save();
      });
    })
    .catch((err: any) => {
      res.status(500).json("에러");
    });
};

registerSymController.findAllRegister = (req: any, res: any, _email: string) => {
  registerSym
    .find({ email: _email })
    .populate("registrant")
    .sort({ create: -1 })
    .then((result: any) => {
      makeListSympton(result).then((_list) => {
        let _registerNum = result.length;
        let authUI = auth.status(req, res);
        res.render("mypage", { authUI: authUI, csrfToken: req.csrfToken(), list: _list, len: _registerNum });
      });
    })
    .catch((err: any) => {
      console.error(err);
    });
};

registerSymController.findCodeBeforeModified = async (req: Request, res: Response) => {
  let result = await registerSym.findOne({ _id: req.url.split("/")[2] }).populate("registrant");
  return result;
};

registerSymController.findImageBeforeModified = async (req: Request, res: Response) => {
  let result = await registerSym.findOne({ _id: req.body.url }).populate("registrant");
  return result;
};

// registerSymController.findRegisterImg = async (id: string) => {
//   let result = await registerSym.find({ _id: id });
//   return result;
// };

registerSymController.UpdateImg = (req: Request, res: Response) => {
  registerSym.updateMany({ _id: req.session._id }, { $set: { img: req.session.img } }).then(() => {});
};

registerSymController.modified = (req: Request, res: Response, data: any) => {
  let { sympton_detail, time, minute, postcode, roadAddress, detailAddress, userwant_content } = data;
  registerSym
    .updateMany(
      { _id: req.session._id },
      { $set: { sympton_detail: sympton_detail, userwant_time: { time, minute }, address: { postcode, roadAddress, detailAddress }, userwant_content: userwant_content } }
    )
    .then(() => {
      res.redirect("/api/mypage");
    });
};
export default registerSymController;
