var express = require("express");
var http = require("http");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "172.17.0.3",
  port: "3307",
  user: "user1",
  password: "pass1",
  database: "master",
});
var serveur = http.createServer(function (req, rep) {
  connection.query("SELECT * FROM Cours", function (err, resultats) {
    if (err) throw err;
    rep.end(JSON.stringify(resultats));
    connection.end();
  });
});
serveur.listen(3000);
