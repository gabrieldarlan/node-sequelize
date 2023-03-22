const express = require("express");
const routes = require("./routes");

const app = express();
const port = 3000;
//chama o metodo que cuida das rotas da api
routes(app);

app.listen(port, () => console.log(`servidor rodando na porta ${port}`));

module.exports = app;
