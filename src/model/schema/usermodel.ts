import mongoose from "mongoose";
interface User extends mongoose.Document {
  email: string;
  password: string;
  name: string;
  salt: string;
  createdAt: string;
  refresh_token: string;
  user_profile_img: string;
  register_sympton: string[];
  user_division: string;
}
const users = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  refresh_token: {
    type: String,
  },
  user_profile_img: { type: String },
  register_sympton: {
    //새로운 모델을 만들어서 정보는 저장하지말고 오브젝트만 저정한다...
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "RegisterSympton" }],
  },
  user_division: {
    type: String,
    default: "common",
    required: true,
  },
});
export = mongoose.model<User>("User", users);
