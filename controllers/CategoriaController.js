

const categoryModel = require("../models/categoriaModel");

exports.getAllCategories = async (req, res) => {
  const categories = await categoryModel.getAll();
  res.json(categories);
};
