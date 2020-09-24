import providerGotModel from "../model/ProviderGotSymptonModel";
let ProviderGotSympton: any = {};

ProviderGotSympton.save = async (symptonId: string, sentProvidersArray: string[]) => {
  for (let i = 0; i < sentProvidersArray.length; i++) {
    let gotSympton = new providerGotModel({
      symptonId: symptonId,
      providerId: sentProvidersArray[i],
    });
    await gotSympton.save();
  }
};

ProviderGotSympton.find = async (symptonId: object) => {
  let result = await providerGotModel.find({ symptonId: symptonId });
  return result;
};

ProviderGotSympton.findProvider = async (providerId: string) => {
  let result = await providerGotModel.find({ providerId: providerId }).populate("symptonId");
  return result;
};

ProviderGotSympton.delete = async (symptonId: string) => {
  await providerGotModel.deleteMany({ symptonId: symptonId });
};

export default ProviderGotSympton;
