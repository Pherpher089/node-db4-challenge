exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("steps")
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex("steps").insert([
				{
					recipie_id: 1,
					step_description: "Spread jelly on bread",
					step_order: 1,
				},
				{
					recipie_id: 1,
					step_description: "Spread peanutbutter on bread",
					step_order: 2,
				},
				{
					recipie_id: 1,
					step_description:
						"Place bread together with peanutbutter and jelly facing inward",
					step_order: 3,
				},
				{
					recipie_id: 2,
					step_description: "Booil noodles",
					step_order: 1,
				},
				{
					recipie_id: 2,
					step_description:
						"Heat spagetti sause you clearly bought in a jar...",
					step_order: 2,
				},
				{
					recipie_id: 2,
					step_description: "Strain noodles",
					step_order: 4,
				},
				{
					recipie_id: 2,
					step_description: "Mix sause in noodles",
					step_order: 4,
				},
				{
					recipie_id: 3,
					step_description: "Boil noodles",
					step_order: 1,
				},
				{
					recipie_id: 3,
					step_description: "Strain noodles",
					step_order: 2,
				},
				{
					recipie_id: 3,
					step_description: "Mix in cheese sause",
					step_order: 3,
				},
				{
					recipie_id: 4,
					step_description:
						"Cook chicken until it is white all the way through",
					step_order: 1,
				},
				{
					recipie_id: 4,
					step_description: "Begin cooking rice in rice cooker",
					step_order: 2,
				},
				{
					recipie_id: 4,
					step_description: "Heat vegitables in fring pan with a bit of oil",
					step_order: 3,
				},
				{
					recipie_id: 4,
					step_description: "Serve chicken over bed of rice and vegitables",
					step_order: 4,
				},
			]);
		});
};
