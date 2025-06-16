const express = require("express");
const bodyParser = require("body-parser"); // ou use express.json()
const cors = require("cors");
const routes = require("./routes");

const app = express();
const port = 8080; // você está testando na porta 8080

const path = require("path");
app.set("views", path.join(__dirname, "views", "pages"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // se quiser usar CSS futuramente

// Middlewares
app.use(cors());
app.use(bodyParser.json()); // ou: app.use(express.json());

// Usa as rotas definidas em routes.js
app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});