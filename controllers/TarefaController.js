const pool = require('../config/database');

const TarefaController = {
  criarTarefa: async (req, res) => {
    const { titulo, descricao } = req.body;
    try {
      const result = await pool.query(
        'INSERT INTO tarefas (titulo, descricao) VALUES ($1, $2) RETURNING *',
        [titulo, descricao]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  listarTarefas: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM tarefas');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  editarTarefa: async (req, res) => {
    const { id } = req.params;
    const { titulo, descricao } = req.body;
    try {
      const result = await pool.query(
        'UPDATE tarefas SET titulo = $1, descricao = $2, updated_at = NOW() WHERE id = $3 RETURNING *',
        [titulo, descricao, id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
      }
      res.json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  excluirTarefa: async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query(
        'DELETE FROM tarefas WHERE id = $1 RETURNING *',
        [id]
      );
      if (result.rows.length === 0) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
      }
      res.status(200).json({ mensagem: 'Tarefa excluída com sucesso' });
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  }
};

module.exports = TarefaController;
