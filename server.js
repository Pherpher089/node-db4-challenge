const express = require("express");

const recepieRouter = require("./Recipies/recipies-router.js");

const server = express();

server.use(express.json());
server.use("/api/recipies", recepieRouter);

server.get("/", (req, res) => {
	res.send("<h1>Hello from your recepie app</h1>");
});

module.exports = server;
