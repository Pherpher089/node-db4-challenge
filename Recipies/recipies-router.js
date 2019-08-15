const express = require("express");

const Recipies = require("./recipies-model");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const recipies = await Recipies.getRecipies();
		res.status(200).json(recipies);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

router.get("/:id/shopping-list", async (req, res) => {
	try {
		const shoppingList = await Recipies.getShoppingList(req.params.id);
		res.status(200).json(shoppingList);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

router.get("/:id/instructions", async (req, res) => {
	try {
		const instructions = await Recipies.getInstructions(req.params.id);
		res.status(200).json(instructions);
	} catch ({ message }) {
		res.status(500).json(message);
	}
});

module.exports = router;
