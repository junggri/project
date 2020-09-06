import mongoose from "mongoose";

const juso = new mongoose.Schema({
  sigunguCode: {
    type: String,
  },
  sigungu: {
    type: String,
  },
  bname: {
    type: String,
  },
  bname1: {
    type: String,
  },
});
export = mongoose.model("juso", juso);
