import users from "../model/usermodel";
import { Request, Response } from "express";
import registerSym from "../model/registerSymModel";
import { makeListSympton } from "../mypageState";
import auth from "../authStatus";

let registerSymController: any = {};

registerSymController.find = async (req: Request, res: Response, email: string) => {
  let result = await registerSym.find({ email: email });
  return result;
};

registerSymController.save = async (req: any, res: any, data: any, _email: string) => {
  let registerSympton: any = new registerSym(data);
  registerSympton
    .save()
    .then(async () => {
      let user: any = await users.findOne({ email: _email });
      user.register_sympton.push(registerSympton._id);
      // user.register_sympton.push(result._id); 위와 동일
      //populate에는 objectId _id를 넣어줘어야한다.
      user.save();
    })
    .catch((err: any) => {
      res.status(500).json("에러");
    });
};

registerSymController.findAllRegister = (req: any, res: any, _email: string) => {
  registerSym
    .find({ email: _email })
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

registerSymController.getAllImage = async (email: string) => {
  let result = await registerSym.find({ email: email });
  return result;
};

registerSymController.findCodeBeforeModified = async (req: Request, res: Response) => {
  let result = await registerSym.findOne({ _id: req.url.split("/")[2] });
  return result;
};

registerSymController.findImageBeforeModified = async (req: Request, res: Response) => {
  let result = await registerSym.findOne({ _id: req.body.url });
  return result;
};

registerSymController.modified = async (req: Request, res: Response, data: any) => {
  let { sympton_detail, time, minute, img, postcode, roadAddress, detailAddress, userwant_content } = data;
  registerSym
    .updateOne(
      { _id: req.session._id },
      { $set: { sympton_detail: sympton_detail, img: img, userwant_time: { time, minute }, address: { postcode, roadAddress, detailAddress }, userwant_content: userwant_content } }
    )
    .then(() => {
      res.redirect("/api/mypage");
    });
};

registerSymController.deleteSympton = async (req: Request, res: Response, email: string) => {
  registerSym.deleteOne({ _id: req.body.id }).then(async () => {
    let result = await users.find({ email: email }).populate("register_sympton");
    console.log(result);
  });
};
export default registerSymController;
