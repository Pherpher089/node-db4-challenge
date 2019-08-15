//Package imports
const express = require("express");

//Importing recipie router
const recepieRouter = require("./Recipies/recipies-router.js");

//Creating server object via express
const server = express();

//Adding middleware/routers
server.use(express.json());
server.use("/api/recipies", recepieRouter);

//Default get request for root path
server.get("/", (req, res) => {
	res.send("<h1>Hello from your recepie app</h1>");
});

//exporting server
module.exports = server;
