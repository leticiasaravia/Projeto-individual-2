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
  apis: ['./routes/*.js'], // ou onde estão suas rotas
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Middleware para processar JSON
app.use(express.json());

// Rotas
const routes = require('./routes/userRoutes');
app.use('/', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Swagger em http://localhost:${PORT}/api-docs`);
});
