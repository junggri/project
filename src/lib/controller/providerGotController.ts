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

ProviderGotSympton.find = async (data: object[]) => {
  console.log(data);
};

export default ProviderGotSympton;
