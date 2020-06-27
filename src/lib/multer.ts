import multer from "multer";
import path from "path";
let session_img: string[] = [];

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload/");
    },
    filename: function (req, file: any, cb) {
      let filename: string = new Date().valueOf() + path.extname(file.originalname);
      cb(null, filename);
      session_img.push(filename);
      req.session.img = session_img;
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
}).array("data", 10);

export default upload;
