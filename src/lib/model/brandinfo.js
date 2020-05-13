const mongoose = require("mongoose");
const BrandSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  brandName: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  detailAddress: {
    type: String,
    required: true,
    trim: true,
  },
  roadAddress: {
    type: String,
    required: true,
    trim: true,
  },
  postcode: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  authority: {
    default: false,
  },
});
module.exports = mongoose.model("Brand", BrandSchema);
