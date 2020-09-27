import provider from "../schema/provideModel";

let provideController: any = {};
interface Data {
  email: string;
  password: string;
  name: string;
  salt: string;
  createdAt: string;
}
provideController.find = async (email: string) => {
  let result = provider.find({ email: email });
  return result;
};

provideController.save = async (data: Data) => {
  let Providers = new provider(data);
  await Providers.save();
};

provideController.tokenUpdate = (req: any, res: any, _email: string, _refresh_token: string, userObjectId: string) => {
  provider
    .updateOne({ _id: userObjectId }, { $set: { refresh_token: _refresh_token } })
    .then((result: any) => {
      console.log("토큰 재발급했어요");
    })
    .catch((err: any) => {
      console.error(err);
    });
};

provideController.isEstimated = async (providerId: string) => {
  let result = await provider.findOne({ _id: providerId });
  return result;
};

export default provideController;
