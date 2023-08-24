const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectDB = () => {
  mongoose.connect("mongodb://localhost:27017");
};

app.listen(PORT || 5050);
//to set up mongoDB. not set yet.
