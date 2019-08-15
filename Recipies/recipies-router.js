//Package imports
const express = require("express");

//importing helper funtions
const Recipies = require("./recipies-model");

//Creating router object
const router = express.Router();

//Gets all recipies in db
router.get("/", async (req, res) => {
	try {
		const recipies = await Recipies.getRecipies();
		res.status(200).json(recipies);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//Returns the recipie with the id passed in.
router.get("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const recipies = await Recipies.getRecipie(id);
		res.status(200).json(recipies);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//Returns a shopping list based on the recipie specified by the id passed in.
router.get("/:id/shopping-list", async (req, res) => {
	try {
		const shoppingList = await Recipies.getShoppingList(req.params.id);
		res.status(200).json(shoppingList);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//Returns the step by step instructions for the recipie specified by the id passed in
router.get("/:id/instructions", async (req, res) => {
	try {
		const instructions = await Recipies.getInstructions(req.params.id);
		res.status(200).json(instructions);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

//Exporting the router object
module.exports = router;
