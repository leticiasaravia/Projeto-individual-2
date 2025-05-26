// controllers/AtividadesController.js
const atividadesRepo = require("../models/atividadesModel");

// Adiciona atividade
exports.criar = async (req, res) => {
  try {
    const nova = await atividadesRepo.novaAtividade(req.body);
    res.status(201).json({ sucesso: true, dados: nova });
  } catch (e) {
    res.status(500).json({ sucesso: false, erro: e.message });
  }
};

// Lista atividade
exports.listar = async (req, res) => {
  try {
    const lista = await atividadesRepo.listarAtividades();
    res.status(200).json({ sucesso: true, dados: lista });
  } catch (e) {
    res.status(500).json({ sucesso: false, erro: e.message });
  }
};

// Atualiza atividade
exports.atualizar = async (req, res) => {
  const { id } = req.params;
  try {
    const alterada = await atividadesRepo.atualizarAtividade(id, req.body);
    if (!alterada) {
      return res.status(404).json({ sucesso: false, mensagem: "Não encontrada" });
    }
    res.status(200).json({ sucesso: true, dados: alterada });
  } catch (e) {
    res.status(500).json({ sucesso: false, erro: e.message });
  }
};

// Remove atividade
exports.remover = async (req, res) => {
  const { id } = req.params;
  try {
    const removida = await atividadesRepo.removerAtividade(id);
    if (!removida) {
      return res.status(404).json({ sucesso: false, mensagem: "Não encontrada" });
    }
    res.status(200).json({ sucesso: true, mensagem: "Removida com sucesso" });
  } catch (e) {
    res.status(500).json({ sucesso: false, erro: e.message });
  }
};