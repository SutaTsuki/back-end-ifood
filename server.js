const express = require("express");
const path = require("path");
const http = require("http");
const app = express();
const fs = require("fs");

http.createServer(function(req, res) {
    if(req.url === "/") {
        fs.readFile("index.html", function(err, data){
            res.writeHead(200, {"content-type" : "text-html"});
            res.end(data);
        });
    }
});

console.log("O SERVIDOR ESTA RODANDO");
app.listen(8080);