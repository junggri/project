import mongoose from "mongoose";
import oauth from "src/public/oauth";
const passport = new mongoose.Schema({
  email: {
    type: String,
  },
  oauth_id: {
    type: String,
  },
  name: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  refresh_token: {
    type: String,
  },
  register_sympton: {
    //새로운 모델을 만들어서 정보는 저장하지말고 오브젝트만 저정한다...
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "RegisterSympton" }],
  },
  type: {
    type: String,
    default: "oauth",
  },
});
export = mongoose.model("Passport", passport);
