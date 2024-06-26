const mongoose = require("mongoose");

const userSchema =  mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  updateCount: { type: Number, default: 0 },
});

const userModal = mongoose.model("userModal", userSchema);
module.exports = userModal;
