import symptonModel from "../model/registerSymModel";
import providerModel from "../model/provideModel";
import submitModel from "../model/submitEstimateModel";
import compression from "compression";

let submitController: any = {};
interface Data {
  registrant_id: string;
  sympton_detail: string;
  save_price: string;
  estimate_price: string;
  sympton_id: string;
}

submitController.findAllProvider = async (symptonId: string) => {
  let result: any = await submitModel.find({ symptonId: symptonId }).populate("provider");
  return result;
};

submitController.findSubmit = async (submitId: string) => {
  let result: any = await submitModel.findOne({ _id: submitId });
  return result;
};

submitController.save = async (symptonId: string, providerId: string, data: any) => {
  let Sympton: any = await symptonModel.findOne({ _id: symptonId });
  let Provider: any = await providerModel.findOne({ _id: providerId });
  let saveData = {
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
  await submitModel.deleteOne({ symptonId: symptonId });
  await symptonModel.updateOne({ _id: symptonId }, { $set: { provider: result.provider } });
  await providerModel.updateOne({ _id: providerId }, { $set: { submit_register: provider.submit_register } });
};
export default submitController;
