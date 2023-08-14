const BooksModel = require("../models/books");

const getAllBooks = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 30; // Default limit is 30
    const page = parseInt(req.query.page);

    const skip = (page - 1) * limit;

    const response = await BooksModel.find().skip(skip).limit(limit);

    return res.status(200).send({
      succuss: true,
      error: false,
      message: "succussfull",
      data: response,
    });
  } catch (error) {
    return res.status(500).send({
      succuss: false,
      error: true,
      message: error.message,
      data: null,
    });
  }
};

const getBookCount = async (req, res) => {
  try {
    const totalItems = await BooksModel.countDocuments();
    return res.status(200).send({
      succuss: true,
      error: false,
      message: "succussfull",
      data: totalItems,
    });
  } catch (error) {
    return res.status(500).send({
      succuss: true,
      error: false,
      message: error.message,
      data: totalItems,
    });
  }
};

module.exports = {
  getAllBooks,
  getBookCount,
};
