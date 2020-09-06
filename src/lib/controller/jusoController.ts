let jusoController: any = {};
import juso from "../model/jusoModel";

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

jusoController.find = async () => {
  let a = await juso.find();
  console.log(a.length);
};

jusoController.save = async (data: any) => {
  for (let i = 0; i < data.length; i++) {
    let a = new juso({ sigunguCode: data[i] });
    a.save();
  }
  // let findArea = Number(changeSigunguCode(sigunguCode));
  // let a = await juso.updateOne({ sigunguCode: findArea }, { $set: { sigungu: data } });
};

export default jusoController;
