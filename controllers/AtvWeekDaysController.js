// controllers/TarefaController.js
const atvModel = require("models\atvModels.js");

// Criar uma nova tarefa
exports.addatv = async (req, res) => {
  try {
    const task = await atvModels.createatv(req.body);
    res.status(201).json(atv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.getatv = async (req, res) => {
  try {
    const atv = await atvModels.getAllatv();
    res.status(200).json(atv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editatv= async (req, res) => {
  const { id } = req.params;
  try {
    const updateatv = await atvModels.updateatv(id, req.body);
    if (!updatedatv) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(updatedatv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.deleteatv = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedatv = await atvModels.deleteatv(id);
    if (!deletedatv) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json({ message: "Tarefa excluída com sucesso" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};