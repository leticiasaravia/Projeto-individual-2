require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST || 'aws-0-sa-east-1.pooler.supabase.com',
  user: process.env.DB_USER || 'postgres.zkrzbuqhbjacbwrenesr',
  password: process.env.DB_PASSWORD || 'UdQlG7k46vGTrszA',
  database: process.env.DB_NAME || 'projetoindividual2'
});

module.exports = connection; 