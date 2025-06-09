-- Conectar ao banco postgres para poder criar novo banco
\c postgres;

-- Criar o banco de dados
DROP DATABASE IF EXISTS tarefas_db;
CREATE DATABASE tarefas_db;

-- Conectar ao banco criado
\c tarefas_db;

-- Criar a tabela tasks
CREATE TABLE IF NOT EXISTS tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pendente'
); 