import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/people-search")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const UserSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  lastName: String,
  email: String,
});

const userModal = mongoose.model("people", UserSchema, "people"); // Provide "people" as the explicit collection name

app.get("/get", (req, res) => {
  userModal
    .find({})
    .then(function (users) {
      if (users.length === 0) {
        res.json({ message: "No users found" });
      } else {
        res.json(users);
      }
    })
    .catch(function (err) {
      console.log(err);
      res.status(500).json({ error: "An error occurred" }); // Sending an error response to the client
    });
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5050;
app.listen(port, () => console.log("Listening on port", port));
