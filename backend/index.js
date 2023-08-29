const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());

// Connecting to the DataBase
mongoose
  .connect("mongodb://127.0.0.1:27017/people-searchDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "people-searchDB",
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// Create a mongoose Schema
const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  lastname: String,
  password: String,
  mobile_email: String,
  dob: String,
  genre: Boolean,
});

// use Schema with database
const userModal = mongoose.model(
  "people-searchDB",
  userSchema,
  "people-searchDB"
); //add 'people' as explicit collctn name

//*************************
//API CALLS
app.get("/", (req, res) => {
  userModal
    .find({})
    .then((users) => {
      if (users.length === 0) res.json({ message: "no users were found" });
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "An error ocurred" });
    });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log("listening on port ", PORT));
