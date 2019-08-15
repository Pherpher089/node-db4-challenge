const db = require("../bd-config");

module.exports = {
	getRecipies,
	getShoppingList,
	getInstructions,
};

function getRecipies() {
	return db("recipies");
}

function getShoppingList(recipie_id) {
	return db("recipie-ingredience as ri")
		.select("i.ingredient_name")
		.join("ingredience as i", "ri.ingredience_id", "i.ingredient_id")
		.where({ recipie_id });
}

function getInstructions(recipie_id) {
	return db("steps")
		.select("step_description")
		.where({ recipie_id });
}
