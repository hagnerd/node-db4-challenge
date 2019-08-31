/*
 * Obj {
 *   recipe_id: foreign_key(@recipes)!
 *   ingredient_id: foreign_key(@ingredients)!
 *   unit_of_measure: cup | teaspoon | tablespoon | oz | lbs
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
      .inTable("recipes")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');


    // this field is nullable because of ingredients such as:
    // hamburger buns, or eggs, or onions
    tbl
      .enum("unit_of_measure", ["cup", "teaspoon", "tablespoon", "oz", "lbs"]);

    tbl.float("quantity").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes_ingredients");
};
