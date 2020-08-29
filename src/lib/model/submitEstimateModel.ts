import mongoose from "mongoose";
const submitSympton = new mongoose.Schema({
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
});

export = mongoose.model("submitEstimate", submitSympton);
