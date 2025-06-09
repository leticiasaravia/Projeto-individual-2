const db = require("../config/db");

// Retorna todas as atividades
async function getAll() {
    const query = `
        SELECT id, title as titulo, description as descricao, status
        FROM tasks 
        ORDER BY id DESC
    `;
    const resultado = await db.query(query);
    return resultado.rows;
}

// Retorna uma atividade específica
async function getById(id) {
    const query = `
        SELECT id, title as titulo, description as descricao, status
        FROM tasks 
        WHERE id = $1
    `;
    const resultado = await db.query(query, [id]);
    return resultado.rows[0];
}

// Cria uma nova atividade
async function create(dados) {
    const { titulo, descricao, status } = dados;
    const query = `
        INSERT INTO tasks (title, description, status)
        VALUES ($1, $2, $3)
        RETURNING id, title as titulo, description as descricao, status;
    `;
    const valores = [titulo, descricao, status || 'pendente'];
    const resultado = await db.query(query, valores);
    return resultado.rows[0];
}

// Atualiza uma atividade
async function update(id, dados) {
    const { titulo, descricao, status } = dados;
    const query = `
        UPDATE tasks
        SET title = $1, 
            description = $2,
            status = $3
        WHERE id = $4
        RETURNING id, title as titulo, description as descricao, status;
    `;
    const valores = [titulo, descricao, status, id];
    const resultado = await db.query(query, valores);
    return resultado.rows[0];
}

// Remove uma atividade
async function delete_(id) {
    const query = `
        DELETE FROM tasks 
        WHERE id = $1 
        RETURNING id
    `;
    const resultado = await db.query(query, [id]);
    return resultado.rows[0];
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: delete_
}; 