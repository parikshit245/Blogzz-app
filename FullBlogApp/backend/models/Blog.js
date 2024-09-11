const mongoose = require("mongoose");

const Blogs = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImageURL: {
      type: String,
      required: false
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", Blogs)