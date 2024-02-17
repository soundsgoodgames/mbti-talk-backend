const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// to enable access to the backend
const cors = require("cors");
const app = express();
app.use(cors());

// Chat gpt solution for CORS error 1/2
app.get("/", (req, res) => {
  res.send("CORS is enabled on this server");
});

// Chat gpt solution for CORS error 2/2
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"));

module.exports = app;
