-- Tabela de pessoas
CREATE TABLE IF NOT EXISTS pessoas (
    id_pessoa INT PRIMARY KEY,
    nome_usuario VARCHAR(100),
    email_usuario VARCHAR(100) UNIQUE,
    senha_hash VARCHAR(100)
);

-- Tabela de grupos
CREATE TABLE IF NOT EXISTS grupos (
    id_grupo INT PRIMARY KEY,
    nome_grupo VARCHAR(100)
);

-- Tabela de atividades
CREATE TABLE IF NOT EXISTS atividades (
    id_atividade INT PRIMARY KEY,
    titulo VARCHAR(200),
    detalhes TEXT,
    grupo_id INT,
    situacao VARCHAR(50),
    data_reset DATE,
    pessoa_id INT,
    FOREIGN KEY (grupo_id) REFERENCES grupos(id_grupo),
    FOREIGN KEY (pessoa_id) REFERENCES pessoas(id_pessoa)
);

-- Tabela de dias
CREATE TABLE IF NOT EXISTS dias (
    id_dia INT PRIMARY KEY,
    nome_dia VARCHAR(20)
);

-- Associação entre atividades e dias
CREATE TABLE IF NOT EXISTS atividades_dias (
    id_associacao INT PRIMARY KEY,
    atividade_id INT,
    dia_id INT,
    FOREIGN KEY (atividade_id) REFERENCES atividades(id_atividade),
    FOREIGN KEY (dia_id) REFERENCES dias(id_dia)
);
