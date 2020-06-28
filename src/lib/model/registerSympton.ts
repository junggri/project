import mongoose from "mongoose";
const registerSympton = new mongoose.Schema({
  registrant: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  sympton_code: {
    type: Number,
  },
  sympton_detail: {
    type: String,
  },
  img: {
    type: Array,
  },
  userwant_time: {
    time: {
      type: Number,
    },
    minute: {
      type: Number,
    },
  },
  address: {
    postcode: { type: String },
    roadAddress: { type: String },
    detailAddress: { type: String },
  },
  userwant_content: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export = mongoose.model("RegisterSympton", registerSympton);
