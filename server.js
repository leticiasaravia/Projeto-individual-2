//este arquivo chama-se server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Universitária',
      version: '1.0.0',
      description: 'Documentação da API de tarefas',
    },
  },
  apis: ['./routes/*.js'], // caminhos para as anotações Swagger
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para processar JSON
app.use(express.json());

// Rotas
const userRoutes = require('./routes/userRoutes');
const tarefaRoutes = require('./routes/index');
const frontRoutes = require('./routes/frontRoutes');

app.use('/usuarios', userRoutes); // ex: GET /usuarios
app.use('/tarefas', tarefaRoutes); // ex: GET /tarefas
app.use('/', frontRoutes);

// Banco de dados
const pool = require('./config/database');


pool.query('SELECT NOW()')
  .then(() => console.log('🟢 Conectado ao banco de dados com sucesso!'))
  .catch(err => console.error('🔴 Erro ao conectar ao banco de dados:', err));

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});


