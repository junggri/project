import mongoose from "mongoose";
const users = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
  social: {
    naver: {
      name: String,
      id: Number,
    },
    goolge: {
      name: String,
      id: Number,
    },
    kakao: {
      name: String,
      id: Number,
    },
  },
  salt: {
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
});
export = mongoose.model("User", users);
