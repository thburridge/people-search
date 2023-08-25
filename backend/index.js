const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/people-search", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "people-search",
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });
