const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

// to enable access to the backend
const cors = require("cors");
const app = express();
app.use(cors());

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("connected to database"));

module.exports = app;