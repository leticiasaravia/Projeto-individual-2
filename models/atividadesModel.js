// models/atividadesModel.js
const db = require("../config/db");

// Retorna todas as atividades (ordem decrescente)
async function listarAtividades() {
  const resultado = await db.query("SELECT * FROM tasks ORDER BY id DESC");
  return resultado.rows;
}

// Cria uma nova atividade (apenas título e descrição)
async function novaAtividade(dados) {
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

// Atualiza atividade existente
async function atualizarAtividade(id, dados) {
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

// Remove atividade
async function removerAtividade(id) {
  const resultado = await db.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
  return resultado.rows[0];
}

module.exports = {
  listarAtividades,
  novaAtividade,
  atualizarAtividade,
  removerAtividade,
};
