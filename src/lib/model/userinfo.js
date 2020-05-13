const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  oauth_email: {
    type: String,
    required: true,
  },
  oauth_name: {
    type: String,
    required: true,
    trim: true,
  },
  oauth_id: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  authority: {
    default: false,
  },
});
module.exports = mongoose.model("User", UserSchema);
