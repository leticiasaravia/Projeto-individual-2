const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.resolve(__dirname, 'database.sqlite');
const dbExists = fs.existsSync(dbPath);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados SQLite', err);
  } else {
    console.log('Conectado ao banco de dados SQLite');
    if (!dbExists) {
      initializeDatabase();
    }
  }
});

function initializeDatabase() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS alunos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT NOT NULL,
        senha TEXT NOT NULL
      )
    `);
    db.run(`
      CREATE TABLE IF NOT EXISTS categorias (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL
      )
    `);
    db.run(`
      CREATE TABLE IF NOT EXISTS prioridade (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        prioridade TEXT NOT NULL
      )
    `);
    db.run(`
      CREATE TABLE IF NOT EXISTS status (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        status TEXT NOT NULL
      )
    `);
    db.run(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        aluno_id INTEGER,
        categorias_id INTEGER,
        titulo TEXT NOT NULL,
        descricao TEXT,
        data_inicio DATE NOT NULL,
        data_fim DATE NOT NULL,
        prioridade INTEGER,
        status INTEGER,
        FOREIGN KEY (aluno_id) REFERENCES alunos(id) ON DELETE CASCADE,
        FOREIGN KEY (categorias_id) REFERENCES categorias(id) ON DELETE SET NULL,
        FOREIGN KEY (prioridade) REFERENCES prioridade(id) ON DELETE SET NULL,
        FOREIGN KEY (status) REFERENCES status(id) ON DELETE SET NULL
      )
    `);
  });
}

module.exports = db;
