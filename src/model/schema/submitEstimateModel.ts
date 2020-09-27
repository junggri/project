import mongoose from "mongoose";

interface Submit extends mongoose.Document {
  register_user: string[];
  symptonId: string;
  provider: any[];
  content: string;
  submit_price: string;
  create: Date;
  state: string;
  payment: boolean;
}

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
    type: Boolean,
    default: false,
  },
});

export = mongoose.model<Submit>("submitEstimate", submitSympton);
