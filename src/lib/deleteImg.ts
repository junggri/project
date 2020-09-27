import fs from "fs";
import path from "path";
import registerController from "../model/controller/registerSymptonContoller";
let savedImg: string[] = [];
let arrImg: string[] = [];

export default async function (email: string, id: string) {
  let imgPath = path.join(__dirname, `../../upload/${id}`);
  let result = await registerController.getAllImage(id);

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
