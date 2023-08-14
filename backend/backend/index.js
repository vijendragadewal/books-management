const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const booksRoute = require("./routes/books");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.MONGO_URL);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN_URL, // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    optionsSuccessStatus: 200, // Return a 200 status for preflight requests
  })
);

app.use(express.json());

app.use("/api", booksRoute);

// Start the server
app.listen(process.env.PORT, (err) => {
  err ? console.log(arr) : console.log(`server running on ${process.env.PORT}`);
});
