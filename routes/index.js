const express = require("express");
const router = express.Router();
const atividadesActions = require("../controllers/AtividadesController");

// Página inicial
router.get("/", (req, res) => {
  res.render("tasks");
});

// Rotas de atividades com nomes diferentes
router.get("/tarefas", atividadesActions.listar);
router.post("/tarefas/nova", atividadesActions.criar);
router.put("/tarefas/:id", atividadesActions.atualizar);
router.delete("/tarefas/:id", atividadesActions.remover);

module.exports = router;
