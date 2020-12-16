require("dotenv").config();
const mongoose = require("mongoose");

function connectDB() {
  //Database Connection
  mongoose.connect(process.env.MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  });

  const db = mongoose.connection;
  db.once("open", () => {
    console.log("we're connected!");
  }).catch((err) => {
    console.log("Database Connection Failed");
  });
}

module.exports = connectDB;
