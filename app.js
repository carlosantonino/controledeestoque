const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/src/index.html");
});

app.get("/contato", function(req, res) {
    res.sendFile(__dirname + "/src/contato.html");
});

app.get("/sobre", function(req, res) {
    res.sendFile(__dirname + "/src/sobre.html");
});

app.get("/blog", function(req, res) {
    res.sendFile(__dirname + "/src/blog.html");
});

app.listen(8080);

