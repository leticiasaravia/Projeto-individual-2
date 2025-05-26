

const categoryModel = require("../models/categoryModel");

exports.getAllCategories = async (req, res) => {
  const categories = await categoryModel.getAll();
  res.json(categories);
};
