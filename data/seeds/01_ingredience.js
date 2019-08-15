exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("ingredience")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("ingredience").insert([
				{ ingredient_name: "Bread" },
				{ ingredient_name: "Noodles" },
				{ ingredient_name: "Rice" },
				{ ingredient_name: "Chicken" },
				{ ingredient_name: "Peanutbutter" },
				{ ingredient_name: "Jelly" },
				{ ingredient_name: "Spagetti Sause" },
				{ ingredient_name: "Cheese Sause" },
				{ ingredient_name: "Mixed vegitables" },
			]);
		});
};
