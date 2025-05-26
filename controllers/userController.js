// A desenvolver (V2.0)

const userModel = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
  const users = await userModel.getAll();
  res.json(users);
};
