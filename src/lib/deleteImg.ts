import fs from "fs";
import path from "path";
import user from "../lib/model/usermodel";
let savedImg: string[] = [];

export default async function (email: string) {
  let imgPath = path.join(__dirname, "../../upload");
  let users = await user.findOne({ email: email }).populate("register_sympton");
  console.log(users);
  // for (let i = 0; i < result.register_sympton.length; i++) {
  //   for (let j = 0; j < result.register_sympton[i].img.length; j++) {
  //     console.log(result.register_sympton[i].img[j]);
  //     savedImg.push(result.register_sympton[i].img[j]);
  //   }
  // }

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
