import mongoose from "mongoose";
const submitSympton = new mongoose.Schema({
  register_user: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  symptonId: {
    type: String,
  },
  provider: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Provider" }],
  },
  content: { type: String },
  submit_price: { type: String },
  create: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: String,
  },
  state: {
    type: String,
    default: "submit",
  },
  payment: {
    type: String,
    default: false,
  },
});

export = mongoose.model("submitEstimate", submitSympton);
