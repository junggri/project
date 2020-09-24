import mongoose from "mongoose";
interface RegisterSympton extends mongoose.Document {
  username: string;
  user_object_id: string;
  email: string;
  code: [];
  sympton_detail: string;
  img: string[];
  userwant_time: object;
  address: object;
  userwant_content: string;
  predict_price: number;
  createdAt: string;
  create: Date;
  provider: string[];
  state: string;
}
const registerSympton = new mongoose.Schema({
  // registrant: {
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "testuser" }],
  // },
  user_name: {
    type: String,
  },
  user_object_id: {
    type: String,
  },
  email: {
    type: String,
  },
  code: {
    type: Array,
  },
  sympton_detail: {
    type: String,
  },
  img: {
    type: Array,
  },
  userwant_time: {
    time: {
      type: String,
      default: 12,
    },
    minute: {
      type: String,
      default: 0,
    },
  },
  address: {
    postcode: { type: String },
    sigunguCode: { type: String },
    sigungu: { type: String },
    bname: { type: String },
    bname1: { type: String },
    roadAddress: { type: String },
    detailAddress: { type: String },
    lat: { type: String },
    lon: { type: String },
  },
  userwant_content: {
    type: String,
  },
  predict_price: {
    type: Number,
  },
  createdAt: {
    type: String,
  },
  create: {
    type: Date,
    default: Date.now,
  },
  provider: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Provider" }],
  },
  state: {
    type: String,
    default: "register",
  },
});

export = mongoose.model<RegisterSympton>("RegisterSympton", registerSympton);
