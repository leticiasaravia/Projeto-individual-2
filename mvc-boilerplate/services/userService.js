const db = require('../config/db');

// Utilitário para executar comandos SQL com Promises
const runQuery = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

const runCommand = (sql, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (err) {
      if (err) reject(err);
      else resolve({ id: this.lastID, changes: this.changes });
    });
  });
};

// Obter todos os usuários
const getAllUsers = async () => {
  try {
    const users = await runQuery('SELECT * FROM alunos');
    return users;
  } catch (error) {
    throw new Error('Erro ao obter usuários: ' + error.message);
  }
};

// Obter usuário por ID
const getUserById = async (id) => {
  try {
    const users = await runQuery('SELECT * FROM alunos WHERE id = ?', [id]);
    return users[0] || null;
  } catch (error) {
    throw new Error('Erro ao obter usuário: ' + error.message);
  }
};

// Criar novo usuário
const createUser = async (nome, email) => {
  try {
    const result = await runCommand('INSERT INTO alunos (nome, email, senha) VALUES (?, ?, 123456)', [nome, email]);
    const newUser = await getUserById(result.id);
    return newUser;
  } catch (error) {
    throw new Error('Erro ao criar usuário: ' + error.message);
  }
};

// Atualizar usuário
const updateUser = async (id, nome, email) => {
  try {
    await runCommand('UPDATE alunos SET nome = ?, email = ? WHERE id = ?', [nome, email, id]);
    const updatedUser = await getUserById(id);
    return updatedUser;
  } catch (error) {
    throw new Error('Erro ao atualizar aluno: ' + error.message);
  }
};

// Deletar usuário
const deleteUser = async (id) => {
  try {
    const user = await getUserById(id);
    if (!user) return null;

    await runCommand('DELETE FROM alunos WHERE id = ?', [id]);
    return user;
  } catch (error) {
    throw new Error('Erro ao deletar aluno: ' + error.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};



//leticiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa