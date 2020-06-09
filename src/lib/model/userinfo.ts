import mongoose from "mongoose";
const users = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
});
export = mongoose.model("users", users);
