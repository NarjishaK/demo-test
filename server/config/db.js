const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect("mongodb://0.0.0.0:27017/UserForm", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(` Database connected \n http://localhost:7001`);
    })
    .catch((err) => {
      console.log(`database error \n +err`);
    });
}

module.exports = connectDB;
