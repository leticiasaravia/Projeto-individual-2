// A desenvolver (V2.0)

const twdModel = require("../models/tasks_week_days");

exports.getAll = async (req, res) => {
  const relations = await twdModel.getAll();
  res.json(relations);
};
