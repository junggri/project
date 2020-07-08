import mongoose from "mongoose";
const image = new mongoose.Schema({
  image: {
    type: Array,
    required: true,
  },
});

export = mongoose.model("image", image);
