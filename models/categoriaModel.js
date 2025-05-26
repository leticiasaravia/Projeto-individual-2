

const db = require("../db");

exports.getAll = () => db.query("SELECT * FROM category");
