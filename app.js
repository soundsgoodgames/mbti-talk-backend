const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// chat gpt 1/3
const corsAnywhere = require("cors-anywhere");

// to enable access to the backend
const cors = require("cors");
const app = express();
app.use(cors());

// chat gpt 2/3
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

// chat gpt 3/3
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
