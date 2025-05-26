// A desenvolver (V2.0)

const categoryModel = require("../models/categoryModel");

exports.getAllCategories = async (req, res) => {
  const categories = await categoryModel.getAll();
  res.json(categories);
};
