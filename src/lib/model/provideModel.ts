import mongoose from "mongoose";
const providers = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },

  refresh_token: {
    type: String,
  },
  user_division: {
    type: String,
    default: "provide",
    required: true,
  },
});
export = mongoose.model("Provider", providers);
