//Package imports
const db = require("../bd-config");

//Exporting helper functions for use by the router
module.exports = {
	getRecipies,
	getRecipie,
	getShoppingList,
	getInstructions,
};

//Gets all recipies in the DB.
function getRecipies() {
	return db("recipies");
}

//Gets a recipie by id - not required, misread the instructions.
function getRecipie(recipie_id) {
	return db("recipies")
		.select("recipie_name")
		.where("recipie_id", "=", recipie_id);
}

//Returns all ingredience needed for the recipie specified by the id passed in.
function getShoppingList(recipie_id) {
	return db("recipie-ingredience as ri")
		.select("i.ingredient_name")
		.join("ingredience as i", "ri.ingredience_id", "i.ingredient_id")
		.where({ recipie_id });
}

//Returns the instructions for the recipie specified by the id passed in.
function getInstructions(recipie_id) {
	return db("steps as s")
		.select("s.step_description")
		.where({ recipie_id })
		.orderBy("s.step_order");
}
