import fs from "fs";
import path from "path";
import user from "../lib/model/usermodel";
import registerController from "../lib/controller/registerSymContoller";
let savedImg: string[] = [];

export default async function (email: string) {
  let imgPath = path.join(__dirname, `../../upload/${email}`);
  let result = await registerController.getAllImage(email);
  let users: any = await user.findOne({ email: email }).populate("register_sympton");
  // console.log(users);
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].img.length; j++) {
      savedImg.push(result[i].img[j]);
    }
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
  });
}
