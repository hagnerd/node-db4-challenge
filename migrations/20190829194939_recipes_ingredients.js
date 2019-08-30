/*
 * Obj {
 *   recipe_id: foreign_key(@recipes)!
 *   ingredient_id: foreign_key(@ingredients)!
 *   unit_of_measure: cup | teaspoon | tablespoon | oz
 *   quantity: float
 * }
 */

exports.up = function(knex) {
  return knex.schema.createTable("recipes_ingredients", tbl => {
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");

    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredient");

    tbl
      .enum("unit_of_measure", ["cup", "teaspoon", "tablespoon", "oz"])
      .notNullable();

    tbl.float("quantity").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes_ingredients");
};
