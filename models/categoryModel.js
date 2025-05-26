// A desenvolver (V2.0)

const db = require("../db");

exports.getAll = () => db.query("SELECT * FROM category");
