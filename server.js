const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname);
const login = path.join(__dirname);

app.use("/", express.static(public));

app.get("/", function(req, res) {
    res.sendFile(path.join(public, "index.html"));
});

app.get("/login", function(req,res) {
    res.sendFile(path.join(public, "login.html" ));
});
console.log("o servidor esta rodando");
app.listen(8080);
