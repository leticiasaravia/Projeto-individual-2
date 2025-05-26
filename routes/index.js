const express = require('express');
const router = express.Router();

const TarefaController = require('../controllers/TarefaController');
const userController = require('../controllers/userController');

// Rotas de usuários
router.get('/api/usuarios', userController.getAllUsers);
router.get('/api/usuarios/:id', userController.getUserById);
router.post('/api/usuarios', userController.createUser);
router.put('/api/usuarios/:id', userController.updateUser);
router.delete('/api/usuarios/:id', userController.deleteUser);

// Rotas de tarefas
router.get('/api/tarefas', TarefaController.listarTarefas);
router.post('/api/tarefas', TarefaController.criarTarefa);
router.put('/api/tarefas/:id', TarefaController.editarTarefa);
router.delete('/api/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;
