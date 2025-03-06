const express = require("express");
const app = express();
const path = require("path");
const public = path.join(__dirname);

app.use("/", express.static(public));

app.get("/", function(req, res) {
    res.sendFile(path.join(public, "index.html"));
})
console.log("o servidor esta rodando");
app.listen(8080);
