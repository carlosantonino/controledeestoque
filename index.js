const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Gerenciador Financeiro");
});

app.get("/contato", function(req, res) {
    res.send("Pagina de Contato");
});

app.listen(8080);

