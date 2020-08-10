import fs from "fs";
import path from "path";
import user from "../lib/model/usermodel";
import registerController from "../lib/controller/registerSymContoller";
import { format } from "url";
let savedImg: string[] = [];
let arrImg: string[] = [];

export default async function (email: string) {
  let imgPath = path.join(__dirname, `../../upload/${email}`);
  let result = await registerController.getAllImage(email);
  // let users: any = await user.findOne({ email: email }).populate("register_sympton");

  for (let i = 0; i < result.length; i++) {
    savedImg = arrImg.concat(savedImg, result[i].img);
  }

  fs.readdir(imgPath, (err, data) => {
    if (err) console.error(err);
    for (let i = 0; i < data.length; i++) {
      if (!savedImg.includes(data[i])) {
        fs.unlink(`${imgPath}/${data[i]}`, (err) => {
          if (err) console.error(err);
        });
      }
    }
    savedImg = [];
  });
}
