import symptonModel from "../model/registerSymModel";
import providerModel from "../model/provideModel";
import submitModel from "../model/submitEstimateModel";
import usermodel from "../model/usermodel";

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
  let result: any = await submitModel.find().where("symptonId").equals(symptonId).where("state").equals("submit").populate("provider");
  // await submitModel.updateOne({ _id: "5f4c6c7a9c243d6313ea2c99" }, { $set: { state: "submit" } });
  // await submitModel.updateOne({ _id: "5f4c6c839c243d6313ea2c9a" }, { $set: { state: "submit" } });
  // await submitModel.updateOne({ _id: "5f4c6c9a9c243d6313ea2c9b" }, { $set: { state: "submit" } });
  // await submitModel.updateOne({ _id: "5f4c6cc29c243d6313ea2c9c" }, { $set: { state: "submit" } });
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

submitController.acceptSubmit = async (submitId: string) => {
  let result = await submitModel.updateOne({ _id: submitId }, { $set: { state: "accept" } });
};

submitController.save = async (symptonId: string, providerId: string, data: any) => {
  let User: any = await usermodel.findOne({ _id: data.user_id });
  let Sympton: any = await symptonModel.findOne({ _id: symptonId });
  let Provider: any = await providerModel.findOne({ _id: providerId });
  let saveData = {
    register_user: User,
    symptonId: data.sympton_id,
    provider: Provider,
    content: data.content,
    submit_price: data.priceValue,
  };
  let Sumbit = new submitModel(saveData);
  await Sumbit.save();
  await Sympton.provider.push(Provider._id);
  await Sympton.save();
  await Provider.submit_register.push(Sympton._id);
  await Provider.save();
};

// submitController.isEstimateAlready = async (data: any) => {
//   let result: any = await submitModel.findOne({ sympton: data }).populate("provider");
//   if (result === null) {
//     return null;
//   }
//   return result;
// };

submitController.delete_submit = async (symptonId: string, providerId: string) => {
  let result: any = await symptonModel.findOne({ _id: symptonId });
  let provider: any = await providerModel.findOne({ _id: providerId });
  let idx = result.provider.indexOf(providerId);
  let idx2 = provider.submit_register.indexOf(symptonId);
  result.provider.splice(idx, 1);
  provider.submit_register.splice(idx2, 1);
  await submitModel.deleteOne({ provider: providerId });
  await symptonModel.updateOne({ _id: symptonId }, { $set: { provider: result.provider } });
  await providerModel.updateOne({ _id: providerId }, { $set: { submit_register: provider.submit_register } });
};
export default submitController;
