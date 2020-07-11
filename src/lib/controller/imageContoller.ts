import Image from "../model/imageModel";
let imageController: any = {};

imageController.save = (req: any, res: any, data: any) => {
  let Img = new Image(data);
  Img.save()
    .then((result) => {})
    .catch((err) => {
      console.error(err);
    });
};

export default imageController;
