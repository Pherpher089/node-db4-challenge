exports.up = function(knex) {
	return knex.schema
		.createTable("recipies", tbl => {
			tbl.increments("recipie_id");
			tbl.string("recipie_name", 128);
		})
		.createTable("steps", tbl => {
			tbl.increments("step_id");
			tbl
				.integer("recipie_id")
				.unsigned()
				.notNullable()
				.references("recipie_id")
				.inTable("recipies");
			tbl.string("step_description").notNullable();
			tbl.integer("step_order").notNullable(); //possible autoincramented.
		})
		.createTable("ingredience", tbl => {
			tbl.increments("ingredient_id");
			tbl.string("ingredient_name");
		})
		.createTable("recipie-ingredience", tbl => {
			tbl
				.integer("recipie_id")
				.unsigned()
				.notNullable()
				.references("recipie_id")
				.inTable("recipies");
			tbl
				.integer("ingredience_id")
				.unsigned()
				.notNullable()
				.references("ingredient_id")
				.inTable("ingredience");
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("recipie-ingredience")
		.dropTableIfExists("ingredience")
		.dropTableIfExists("steps")
		.dropTableIfExists("recipies");
};
