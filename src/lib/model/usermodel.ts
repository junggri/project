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
    type: Date,
    default: Date.now,
  },
  refresh_token: {
    type: String,
  },
});
export = mongoose.model("testuser", users);