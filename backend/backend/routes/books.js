const express = require("express");
const { getAllBooks, getBookCount } = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.get("/books", getAllBooks);
booksRouter.get("/books/count", getBookCount);
module.exports = booksRouter;
