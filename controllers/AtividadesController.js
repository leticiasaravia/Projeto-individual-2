// controllers/AtividadesController.js
const atividadesModel = require("../models/atvdiaSemanaModel");

// Lista todas as tarefas
exports.listar = async (req, res) => {
  try {
    const tarefas = await atividadesModel.getAll();
    res.json(tarefas);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

// Busca uma tarefa específica
exports.buscarPorId = async (req, res) => {
  try {
    const tarefa = await atividadesModel.getById(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
  } catch (error) {
    console.error('Erro ao buscar tarefa:', error);
    res.status(500).json({ error: 'Erro ao buscar tarefa' });
  }
};

// Cria uma nova tarefa
exports.criar = async (req, res) => {
  try {
    const tarefa = await atividadesModel.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

// Atualiza uma tarefa
exports.atualizar = async (req, res) => {
  try {
    const tarefa = await atividadesModel.update(req.params.id, req.body);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json(tarefa);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

// Remove uma tarefa
exports.remover = async (req, res) => {
  try {
    const tarefa = await atividadesModel.delete(req.params.id);
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch (error) {
    console.error('Erro ao remover tarefa:', error);
    res.status(500).json({ error: 'Erro ao remover tarefa' });
  }
};

exports.formNova = async (req, res) => {
  res.render('form', { tarefa: null });
};

// Renderiza o formulário de edição
exports.formEditar = async (req, res) => {
  try {
    const tarefa = await atividadesModel.getById(req.params.id);
    if (!tarefa) {
      return res.redirect('/');
    }
    res.render('form', { tarefa });
  } catch (error) {
    console.error('Erro ao buscar tarefa:', error);
    res.redirect('/');
  }
};