// controllers/TarefaController.js
const taskModel = require("../models/taskModel");

// Criar uma nova tarefa
exports.addTask = async (req, res) => {
  try {
    const task = await taskModel.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.getAllTasks();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await taskModel.updateTask(id, req.body);
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await taskModel.deleteTask(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json({ message: "Tarefa excluída com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
