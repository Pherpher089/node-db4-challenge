exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("recipie-ingredience")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("recipie-ingredience").insert([
				{ recipie_id: 1, ingredience_id: 1 },
				{ recipie_id: 1, ingredience_id: 6 },
				{ recipie_id: 1, ingredience_id: 5 },
				{ recipie_id: 2, ingredience_id: 2 },
				{ recipie_id: 2, ingredience_id: 7 },
				{ recipie_id: 3, ingredience_id: 2 },
				{ recipie_id: 3, ingredience_id: 8 },
				{ recipie_id: 4, ingredience_id: 4 },
				{ recipie_id: 4, ingredience_id: 3 },
			]);
		});
};
