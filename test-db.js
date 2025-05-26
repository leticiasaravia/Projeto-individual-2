const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query('SELECT NOW()')
  .then(res => {
    console.log('🟢 Conectado com sucesso!', res.rows);
    pool.end();
  })
  .catch(err => {
    console.error('🔴 Erro ao conectar:', err);
    pool.end();
  });
