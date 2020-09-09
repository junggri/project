import users from "../model/usermodel";
import { Request, Response } from "express";
import registerSym from "../model/registerSymModel";
import { makeListSympton } from "../mypageState";
import auth from "../authStatus";
import provideModel from "../model/provideModel";
import submitModel from "../model/submitEstimateModel";
import submitCotroller from "../controller/submitController";
let registerSymController: any = {};

function changeSigunguCode(sigunguCode: string) {
  let findArea;
  if (sigunguCode === "seoul") findArea = "11";
  if (sigunguCode === "busan") findArea = "26";
  if (sigunguCode === "daegu") findArea = "27";
  if (sigunguCode === "incheon") findArea = "28";
  if (sigunguCode === "gwangju") findArea = "29";
  if (sigunguCode === "daejeon") findArea = "30";
  if (sigunguCode === "ulsan") findArea = "31";
  if (sigunguCode === "sejong") findArea = "36";
  if (sigunguCode === "gyeonggido") findArea = "41";
  if (sigunguCode === "gangwon") findArea = "42";
  if (sigunguCode === "chungcheongbukdo") findArea = "43";
  if (sigunguCode === "chungcheongnamdo") findArea = "44";
  if (sigunguCode === "jeollabukdo") findArea = "45";
  if (sigunguCode === "jeollanamdo") findArea = "46";
  if (sigunguCode === "gyeongsangbukdo") findArea = "47";
  if (sigunguCode === "gyeongsangnamdo") findArea = "48";
  if (sigunguCode === "jeju") findArea = "50";
  return findArea;
}
registerSymController.showBeforeEstimate = async (_id: string) => {
  let result = await registerSym.findOne({ _id: _id });
  return result;
};

registerSymController.getAllData = async (pageNum: number, divided_num: number) => {
  //아무것도클릭 안했을때 나오는 데이터인데 순서대로 15개만 가져온다
  let result: any = await registerSym
    .find()
    .sort({ create: -1 })
    .skip((pageNum - 1) * divided_num)
    .limit(divided_num);
  return result;
};

registerSymController.makePagination = async () => {
  //아무 것도 클릭하지 않았을떄 전체데이터로 페이지네이션을 만든다
  let result = await registerSym.find().sort({ create: -1 });
  return result;
};

registerSymController.getSpecificData = async (pageNum: number, sigunguCode: string, sigungu: string, bname: string, divided_num: number) => {
  //특정지역을 선택했을때 가져오는데이터
  let findArea = changeSigunguCode(sigunguCode);
  let result: any;
  if (sigunguCode === "sejong") {
    result = await registerSym
      .find({ "address.sigunguCode": findArea })
      .sort({ create: -1 })
      .skip((Number(pageNum) - 1) * divided_num)
      .limit(divided_num);
    if (sigunguCode === "sejong" && bname !== "0") {
      result = await registerSym
        .find()
        .where("address.sigunguCode")
        .equals(findArea)
        .where("address.bname")
        .equals(bname)
        .sort({ create: -1 })
        .skip((Number(pageNum) - 1) * divided_num)
        .limit(divided_num);
      if (result.length === 0) {
        result = await registerSym
          .find()
          .where("address.sigunguCode")
          .equals(findArea)
          .where("address.bname1")
          .equals(bname)
          .sort({ create: -1 })
          .skip((Number(pageNum) - 1) * divided_num)
          .limit(divided_num);
      }
    }
    return result;
  } else {
    //시도만 선택했을때
    if (sigunguCode !== "0" && sigungu === "0" && bname === "0") {
      result = await registerSym
        .find({ "address.sigunguCode": findArea })
        .sort({ create: -1 })
        .skip((Number(pageNum) - 1) * divided_num)
        .limit(divided_num);
      return result;
    } else if (sigunguCode !== "0" && sigungu !== "0" && bname === "0") {
      //시도와 시군구를 선택했을때
      result = await registerSym.find().where("address.sigunguCode").equals(findArea).where("address.sigungu").equals(sigungu);
      return result;
    } else if (sigunguCode !== "0" && sigungu !== "0" && bname !== "0") {
      //시도와 시군구 동면읍을 선택했을떄
      result = await registerSym.find().where("address.sigunguCode").equals(findArea).where("address.sigungu").equals(sigungu).where("address.bname").equals(bname);
      if (result.length === 0) {
        result = await registerSym.find().where("address.sigunguCode").equals(findArea).where("address.sigungu").equals(sigungu).where("address.bname1").equals(bname);
      }
      return result;
    }
  }
};

registerSymController.makeSpecificPagination = async (pageNum: number, sigunguCode: string, sigungu: string, bname: string, divided_num: number) => {
  //각 지열별로 모든 증상을 찾아 만들어야한다
  let findArea = changeSigunguCode(sigunguCode);
  let result;
  if (sigunguCode === "sejong") {
    result = await registerSym.find({ "address.sigunguCode": findArea }).sort({ create: -1 });
    if (sigunguCode === "sejong" && bname !== "0") {
      result = await registerSym.find().where("address.sigunguCode").equals(findArea).where("address.bname").equals(bname);
      if (result.length === 0) {
        result = await registerSym.find().where("address.sigunguCode").equals(findArea).where("address.bname1").equals(bname);
      }
    }
    return result;
  } else {
    //세종시를 제외하고 찾는다
    if (sigunguCode !== "0" && sigungu === "0" && bname === "0") {
      result = await registerSym.find({ "address.sigunguCode": findArea }).sort({ create: -1 });
      return result;
    } else if (sigunguCode !== "0" && sigungu !== "0" && bname === "0") {
      result = await registerSym
        .find()
        .where("address.sigunguCode")
        .equals(findArea)
        .where("address.sigungu")
        .equals(sigungu)
        .sort({ create: -1 })
        .skip((Number(pageNum) - 1) * divided_num)
        .limit(divided_num);
      return result;
    } else if (sigunguCode !== "0" && sigungu !== "0" && bname !== "0") {
      result = await registerSym
        .find()
        .where("address.sigunguCode")
        .equals(findArea)
        .where("address.sigungu")
        .equals(sigungu)
        .where("address.bname")
        .equals(bname)
        .sort({ create: -1 })
        .skip((Number(pageNum) - 1) * divided_num)
        .limit(divided_num);
      if (result.length === 0) {
        result = await registerSym
          .find()
          .where("address.sigunguCode")
          .equals(findArea)
          .where("address.sigungu")
          .equals(sigungu)
          .where("address.bname1")
          .equals(bname)
          .sort({ create: -1 })
          .skip((Number(pageNum) - 1) * divided_num)
          .limit(divided_num);
      }
      return result;
    }
  }
};

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
    .sort({ state: 1 })
    .then((result: any) => {
      makeListSympton(result).then(async (_list) => {
        let authUI = auth.status(req, res);
        res.render("mypageEstimate", { authUI: authUI, csrfToken: req.csrfToken(), list: _list });
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
  let { sympton_detail, time, minute, img, postcode, roadAddress, detailAddress, userwant_content, sigunguCode, sigungu, bname, bname1, lat, lon } = data;
  registerSym
    .updateOne(
      { _id: req.session._id },
      {
        $set: {
          sympton_detail: sympton_detail,
          img: img,
          userwant_time: { time, minute },
          address: { postcode, sigunguCode, sigungu, bname, bname1, roadAddress, detailAddress, lat, lon },
          userwant_content: userwant_content,
        },
      }
    )
    .then(() => {
      req.session._id = "";
      return res.redirect("/api/mypage");
    });
};

registerSymController.isFullSubmit = async (data: any) => {
  let result: any = await registerSym.findOne({ _id: data.sympton_id });
  return result;
};

registerSymController.deleteSympton = async (req: Request, res: Response, email: string, id: string) => {
  registerSym.deleteOne({ _id: req.body.id }).then(async () => {
    let submit: any = await submitModel.find({ symptonId: req.body.id }).populate("provider");
    if (submit.length !== 0) {
      for (let i = 0; i < submit.length; i++) {
        let provider: any = await provideModel.findOne({ _id: submit[i].provider[0]._id });
        let idx = provider.submit_register.indexOf(req.body.id);
        provider.submit_register.splice(idx, 1);
        console.log(provider.submit_register);
        await provideModel.updateOne({ _id: submit[i].provider[0]._id }, { $set: { submit_register: provider.submit_register } });
        await submitModel.deleteOne({ symptonId: req.body.id });
      }
    }
    let result: any = await users.findOne({ _id: id }).populate("register_sympton");
    let s1 = await users.updateOne({ _id: id }, { $set: { register_sympton: result.register_sympton } });
  });
};

export default registerSymController;
