const mongoose = require("mongoose");
const TokenSchema = new mongoose.Schema({
  token: {
    type: String,
  },
  email: { type: String },
  createdAt: { type: Date, default: Date.now, expires: 600 },
});

module.exports = mongoose.model("Token", TokenSchema);
