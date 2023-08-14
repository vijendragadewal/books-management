const { default: mongoose, Schema } = require("mongoose");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountRate: {
    type: Number,
    default: 0,
  },
});

const BooksModel = mongoose.model("books", schema);

module.exports = BooksModel;
