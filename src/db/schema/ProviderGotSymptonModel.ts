import mongoose from "mongoose";
const providerGotSympton = new mongoose.Schema({
  symptonId: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "RegisterSympton" }],
  },
  providerId: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "RegisterSympton" }],
  },
  create: {
    type: Date,
    default: Date.now,
  },
});
export = mongoose.model("ProviderGotSympton", providerGotSympton);
