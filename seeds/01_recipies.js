exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("recipies")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("recipies").insert([
				{ recipie_name: "Peanutbutter and Jelly Sandwitch" },
				{ recipie_name: "Spagetti" },
				{ recipie_name: "Mac n Cheese" },
				{ recipie_name: "Chicken and Rice" },
			]);
		});
};
