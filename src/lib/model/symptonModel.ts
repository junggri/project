import mongoose from "mongoose";
const Sympton = new mongoose.Schema({
  content: {
    tpye: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  refresh_token: {
    type: String,
  },
});
export = mongoose.model("Sypmtopn", Sympton);
