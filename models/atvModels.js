

const db = require("../config/db");

// Retorna
async function listarAtv() {
  const resultado = await db.query("SELECT * FROM tasks ORDER BY id DESC");
  return resultado.rows;
}

// Cria 
async function novaAtv(dados) {
  const { title, description } = dados;
  const query = `
    INSERT INTO tasks (title, description)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const valores = [title, description];
  const resultado = await db.query(query, valores);
  return resultado.rows[0];
}

// Atualiza
async function atualizarAtv(id, dados) {
  const { title, description } = dados;
  const query = `
    UPDATE tasks
    SET title = $1, description = $2
    WHERE id = $3
    RETURNING *;
  `;
  const valores = [title, description, id];
  const resultado = await db.query(query, valores);
  return resultado.rows[0];
}

// Remove
async function removerAtv(id) {
  const resultado = await db.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
  return resultado.rows[0];
}

module.exports = {
  listarAtv,
  novaAtv,
  atualizarAtv,
  removerAtv,
};
