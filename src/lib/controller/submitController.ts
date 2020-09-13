import symptonModel from "../model/registerSymModel";
import providerModel from "../model/provideModel";
import submitModel from "../model/submitEstimateModel";
import usermodel from "../model/usermodel";
import moment from "moment";
import sanitizeHtml from "sanitize-html";
import submitEstimateModel from "../model/submitEstimateModel";

let submitController: any = {};

interface Data {
  registrant_id: string;
  sympton_detail: string;
  save_price: string;
  estimate_price: string;
  sympton_id: string;
}

submitController.findAllProvider = async (symptonId: string) => {
  let arr: any = [];
  let result: any = await submitModel.find().where("symptonId").equals(symptonId).populate("provider");
  // await submitModel.updateOne({ _id: "5f4c6c7a9c243d6313ea2c99" }, { $set: { state: "submit" } });
  // await submitModel.updateOne({ _id: "5f4c6c839c243d6313ea2c9a" }, { $set: { state: "submit" } });
  // await submitModel.updateOne({ _id: "5f4c6c9a9c243d6313ea2c9b" }, { $set: { state: "submit" } });
  // await submitModel.updateOne({ _id: "5f4c6cc29c243d6313ea2c9c" }, { $set: { state: "submit" } });
  return result;
};

submitController.showProvider = async (symptonId: string) => {
  let result: any = await submitModel.findOne({ symptonId: symptonId }).where("state").equals("accept").populate("provider");
  return result;
};

submitController.getState = async (symptonId: string) => {
  let result: any = await submitModel.findOne({ symptonId: symptonId });
  return result;
};

submitController.findSubmit = async (submitId: string) => {
  let result: any = await submitModel.findOne({ _id: submitId });
  return result;
};

submitController.getProviderData = async (submitId: string) => {
  let result: any = await submitModel.findOne({ _id: submitId }).populate("provider");
  return result;
};

submitController.acceptSubmit = async (submitId: string, symptonId: string) => {
  let submits = await submitModel.find({ symptonId: symptonId });
  await symptonModel.updateOne({ _id: symptonId }, { $set: { state: "accept" } });
  for (let i = 0; i < submits.length; i++) {
    if (submitId === submits[i].id) {
      await submitModel.updateOne({ _id: submits[i].id }, { $set: { state: "accept" } });
    } else {
      await submitModel.updateOne({ _id: submits[i].id }, { $set: { state: "reject" } });
    }
  }
};

submitController.save = async (symptonId: string, providerId: string, data: any) => {
  let User: any = await usermodel.findOne({ _id: data.user_id });
  let Sympton: any = await symptonModel.findOne({ _id: symptonId });
  let Provider: any = await providerModel.findOne({ _id: providerId });
  let time = moment().format("YYYY-MM-DD");
  let saveData = {
    register_user: User,
    symptonId: data.sympton_id,
    provider: Provider,
    content: sanitizeHtml(data.content),
    submit_price: sanitizeHtml(data.priceValue),
    createdAt: time,
  };
  let Sumbit = new submitModel(saveData);
  await Sumbit.save();
  await Sympton.provider.push(Provider._id);
  await Sympton.save();
  await Provider.submit_register.push(Sympton._id);
  await Provider.save();
};

submitController.isSubmited = async (symptonId: string) => {
  let result: any = await submitModel.findOne({ symptonId: symptonId });
  return result;
};

submitController.delete_submit = async (req: any, res: any, symptonId: string, providerId: string) => {
  let submit: any = await submitModel.findOne().where("provider").equals(providerId).where("symptonId").equals(symptonId);
  if (submit.state === "accept") {
    return res.json({ state: "accept" });
  } else {
    let result: any = await symptonModel.findOne({ _id: symptonId });
    let provider: any = await providerModel.findOne({ _id: providerId });
    let idx = result.provider.indexOf(providerId);
    let idx2 = provider.submit_register.indexOf(symptonId);
    result.provider.splice(idx, 1);
    provider.submit_register.splice(idx2, 1);
    await submitModel.deleteOne({ _id: submit._id });
    await symptonModel.updateOne({ _id: symptonId }, { $set: { provider: result.provider } });
    await providerModel.updateOne({ _id: providerId }, { $set: { submit_register: provider.submit_register } });
    res.json({ url: req.body.symptonId, state: true });
  }
};

submitController.getDataFromProviderId = async (providerId: string) => {
  let result = await submitModel.find({ provider: providerId }).sort({ create: -1 });
  return result;
};

submitController.reset = async () => {
  let User = await providerModel.find();
  for (let i = 0; i < User.length; i++) {
    await providerModel.updateOne({ _id: User[i]._id }, { $set: { submit_register: [] } });
  }
  let User2 = await usermodel.find();
  for (let i = 0; i < User2.length; i++) {
    await usermodel.updateOne({ _id: User2[i]._id }, { $set: { register_sympton: [] } });
  }
};
export default submitController;
