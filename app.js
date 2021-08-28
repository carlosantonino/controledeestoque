const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res) {
    res.send("Pagina de Contato");
});

app.get("/sobre", function(req, res) {
    res.send("Pagina Sobre a empresa");
});

app.get("/blog", function(req, res) {
    res.send("Pagina Blog");
});

app.listen(8080);

