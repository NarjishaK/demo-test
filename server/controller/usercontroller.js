const userModal = require("../models/usermodal");
const UserModal = require("../models/usermodal");
const asyncHandler = require("express-async-handler");

exports.users = asyncHandler(async (req, res) => {
  const { username, phone, email, password } = req.body;
  try {
    const users = await UserModal.create({
      username: username,
      phone: phone,
      email: email,
      password: password,
    });
    if (users) {
      res.send("success");
    } else {
      res.send("failed");
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "an error occured in" });
  }
});

exports.update = asyncHandler(async (req, res) => {
  try {
    const users = await userModal.find();
    if (!users) {
      return res.status(404).json({ err: "not found" });
    }
    res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "an error occurred" });
  }
});

exports.edituser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModal.findById(id);
    if (!user) {
      return res.status(404).json({ err: "not found user" });
    }
    res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "an error occured" });
  }
});

exports.updateuser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { username, password, email, phone } = req.body;
  try {
    const user = await userModal.findById(id);
    if (!user) {
      return res.status(404).json({ err: "User not found" });
    }
    user.phone = phone;
    user.email = email;
    user.username = username;
    user.password = password;
    user.updateCount += 1;
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ err: "An error occurred" });
  }
});