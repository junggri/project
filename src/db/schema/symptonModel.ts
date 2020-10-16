import mongoose from "mongoose";

const Sympton = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  code: {
    type: Number,
    required: true,
  },
  avg_price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export = mongoose.model("Sypmton", Sympton);
