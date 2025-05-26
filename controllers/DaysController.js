// A desenvolver (V2.0)

const daysModel = require("../models/days_of_week");

exports.getAllDays = async (req, res) => {
  const days = await daysModel.getAll();
  res.json(days);
};
