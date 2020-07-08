import mongoose from "mongoose";
import moment from "moment";
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
});
export = mongoose.model("testuser", users);
