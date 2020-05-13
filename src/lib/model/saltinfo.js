const mongoose = require("mongoose");
const BrandSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Salt", BrandSchema);
