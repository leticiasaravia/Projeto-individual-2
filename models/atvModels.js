
// models/taskModel.js
const db = require("../config/db");

// Retorna tarefa
async function listarTarefas() {
  const resultado = await db.query("SELECT * FROM tasks ORDER BY id DESC");
  return resultado.rows;
}

// Cria tarefa 
async function novaTarefa(dados) {
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

// Atualiza tarefa
async function atualizarTarefa(id, dados) {
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

// Remove tarefa
async function removerTarefa(id) {
  const resultado = await db.query("DELETE FROM tasks WHERE id = $1 RETURNING *", [id]);
  return resultado.rows[0];
}

module.exports = {
  listarTarefas,
  novaTarefa,
  atualizarTarefa,
  removerTarefa,
};
