const pool = require('../config/database');

// Obter todos os usuários
const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM usuarios');
  return result.rows;
};

// Obter usuário por ID
const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id]);
  return result.rows[0] || null;
};

// Criar novo usuário
const createUser = async (nome, email) => {
  const result = await pool.query(
    'INSERT INTO usuarios (nome, email) VALUES ($1, $2) RETURNING *',
    [nome, email]
  );
  return result.rows[0];
};

// Atualizar usuário
const updateUser = async (id, nome, email) => {
  const result = await pool.query(
    'UPDATE usuarios SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
    [nome, email, id]
  );
  return result.rows[0] || null;
};

// Deletar usuário
const deleteUser = async (id) => {
  const result = await pool.query(
    'DELETE FROM usuarios WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0] || null;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};