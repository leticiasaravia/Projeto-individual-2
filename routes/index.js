const express = require("express");
const router = express.Router();
const atividadesController = require("../controllers/AtividadesController");

// Rotas para renderização das views
router.get("/", (req, res) => res.render("index"));
router.get("/nova-tarefa", (req, res) => res.render("form", { tarefa: null }));
router.get("/editar-tarefa/:id", atividadesController.formEditar);

// Rotas da API
router.get("/api/tarefas", atividadesController.listar);
router.post("/api/tarefas", atividadesController.criar);
router.get("/api/tarefas/:id", atividadesController.buscarPorId);
router.put("/api/tarefas/:id", atividadesController.atualizar);
router.delete("/api/tarefas/:id", atividadesController.remover);

module.exports = router;
