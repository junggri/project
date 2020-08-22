import users from "../model/usermodel";
import { Request, Response } from "express";
import registerSym from "../model/registerSymModel";
import { makeListSympton } from "../mypageState";
import auth from "../authStatus";
let registerSymController: any = {};

registerSymController.find = async (req: Request, res: Response, email: string, id: string) => {
  let result = await registerSym.find({ user_object_id: id });
  return result;
};

registerSymController.save = async (req: any, res: any, data: any, _email: string, id: string) => {
  let registerSympton: any = new registerSym(data);
  registerSympton
    .save()
    .then(async () => {
      let user: any = await users.findOne({ _id: id });
      user.register_sympton.push(registerSympton._id);
      // user.register_sympton.push(result._id); 위와 동일
      //populate에는 objectId _id를 넣어줘어야한다.
      user.save();
    })
    .catch((err: any) => {
      return console.error(err);
    });
};

registerSymController.findAllRegister = async (req: any, res: any, _email: string, id: string) => {
  registerSym
    .find({ user_object_id: id })
    .sort({ create: -1 })
    .then((result: any) => {
      makeListSympton(result).then(async (_list) => {
        let _registerNum = result.length;
        let authUI = auth.status(req, res);
        let user: any = await users.findOne({ _id: id });
        res.render("mypage", { authUI: authUI, csrfToken: req.csrfToken(), list: _list, len: _registerNum, username: user.name });
      });
    })
    .catch((err: any) => {
      console.error(err);
    });
};
//수정완료

registerSymController.getAllImage = async (id: string) => {
  let result = await registerSym.find({ user_object_id: id });
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
  let { sympton_detail, time, minute, img, postcode, roadAddress, detailAddress, userwant_content, sigunguCode, sigungu, bname, bname1 } = data;
  registerSym
    .updateOne(
      { _id: req.session._id },
      {
        $set: {
          sympton_detail: sympton_detail,
          img: img,
          userwant_time: { time, minute },
          address: { postcode, sigunguCode, sigungu, bname, bname1, roadAddress, detailAddress },
          userwant_content: userwant_content,
        },
      }
    )
    .then(() => {
      req.session._id = "";
      return res.redirect("/api/mypage");
    });
};

registerSymController.deleteSympton = async (req: Request, res: Response, email: string, id: string) => {
  let arr: string[] = [];
  registerSym.deleteOne({ _id: req.body.id }).then(async () => {
    let result: any = await users.findOne({ _id: id }).populate("register_sympton");
    for (let i = 0; i < result.register_sympton.length; i++) {
      arr.push(result.register_sympton[i]._id);
    }
    let s1 = await users.updateOne({ _id: id }, { $set: { register_sympton: arr } });
  });
};
export default registerSymController;
