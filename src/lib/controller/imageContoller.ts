import Image from "../model/imageModel";
let imageController: any = {};

imageController.save = (req: any, res: any, data: any) => {
  let Img = new Image(data);
  Img.save();
};
export default imageController;
