import mongoose from "mongoose";
const registerSympton = new mongoose.Schema({
  // registrant: {
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: "testuser" }],
  // },
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
    roadAddress: { type: String },
    detailAddress: { type: String },
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
});

export = mongoose.model("RegisterSympton", registerSympton);
