exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          unit_of_measure: "lbs",
          quantity: 1.0
        },
        {
          recipe_id: 1,
          ingredient_id: 19,
          unit_of_measure: "oz",
          quantity: 16.0
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          unit_of_measure: null,
          quantity: 1.0
        },
        {
          recipe_id: 1,
          ingredient_id: 9,
          unit_of_measure: "tablespoon",
          quantity: 1.0
        },
        {
          recipe_id: 1,
          ingredient_id: 7,
          unit_of_measure: "tablespoon",
          quantity: 0.5
        },
        {
          recipe_id: 1,
          ingredient_id: 8,
          unit_of_measure: "teaspoon",
          quantity: 1.0
        },
        {
          recipe_id: 1,
          ingredient_id: 10,
          unit_of_measure: "tablespoon",
          quantity: 1.0
        },
        {
          recipe_id: 1,
          ingredient_id: 11,
          unit_of_measure: "tablespoon",
          quantity: 1.0
        },

        // Egg burrito
        {
          recipe_id: 2,
          ingredient_id: 16,
          unit_of_measure: null,
          quantity: 4.0
        },
        {
          recipe_id: 2,
          ingredient_id: 4,
          unit_of_measure: null,
          quantity: 4.0
        },
        {
          recipe_id: 2,
          ingredient_id: 15,
          unit_of_measure: "oz",
          quantity: 8.0
        },
        {
          recipe_id: 2,
          ingredient_id: 7,
          unit_of_measure: "teaspoon",
          quantity: 0.25
        },
        {
          recipe_id: 2,
          ingredient_id: 8,
          unit_of_measure: "teaspoon",
          quantity: 0.25
        },
        {
          recipe_id: 2,
          ingredient_id: 6,
          unit_of_measure: "teaspoon",
          quantity: 0.25
        },
        {
          recipe_id: 2,
          ingredient_id: 12,
          unit_of_measure: "teaspoon",
          quantity: 0.5
        },
        {
          recipe_id: 2,
          ingredient_id: 11,
          unit_of_measure: "teaspoon",
          quantity: 0.5
        },
        {
          recipe_id: 2,
          ingredient_id: 13,
          unit_of_measure: "teaspoon",
          quantity: 0.25
        },

        // Burgers
        {
          recipe_id: 3,
          ingredient_id: 17,
          unit_of_measure: "lbs",
          quantity: 1.0
        },
        {
          recipe_id: 3,
          ingredient_id: 18,
          unit_of_measure: null,
          quantity: 4.0
        },
        {
          recipe_id: 3,
          ingredient_id: 14,
          unit_of_measure: "oz",
          quantity: 2.0
        },
        {
          recipe_id: 3,
          ingredient_id: 7,
          unit_of_measure: "tablespoon",
          quantity: 0.5
        },
        {
          recipe_id: 3,
          ingredient_id: 8,
          unit_of_measure: "tablespoon",
          quantity: 0.25
        },
        {
          recipe_id: 3,
          ingredient_id: 6,
          unit_of_measure: "tablespoon",
          quantity: 0.5
        },
        {
          recipe_id: 3,
          ingredient_id: 10,
          unit_of_measure: "tablespoon",
          quantity: 0.5
        },
        {
          recipe_id: 3,
          ingredient_id: 11,
          unit_of_measure: "tablespoon",
          quantity: 0.5
        },
        {
          recipe_id: 3,
          ingredient_id: 5,
          unit_of_measure: "tablespoon",
          quantity: 0.25
        },
        {
          recipe_id: 3,
          ingredient_id: 3,
          unit_of_measure: null,
          quantity: 0.5
        }
      ]);
    });
};
