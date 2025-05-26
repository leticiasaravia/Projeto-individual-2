const db = require('../config/db');

class User {
  static async getAll() {
    const result = await db.query('SELECT * FROM alunos');
    return result.rows;
  }

  
  static async getById(id) {
    const result = await db.query('SELECT * FROM alunos WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async create(data) {
    const result = await db.query(
      'INSERT INTO alunos (nome, email, senha) VALUES ($1, $2, 1234) RETURNING *',
      [data.nome, data.email]
    );
    return result.rows[0];
  }

  static async update(id, data) {
    const result = await db.query(
      'UPDATE alunos SET nome = $1, email = $2 WHERE id = $3 RETURNING *',
      [data.nome, data.email, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    const result = await db.query('DELETE FROM alunos WHERE id = $1 RETURNING *', [id]);
    return result.rowCount > 0;
  }
}

module.exports = User;
