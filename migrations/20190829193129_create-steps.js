/*
 * Step {
 *   id: ID!
 *   recipe_id: foreign_key(@recipe)!
 *   step_number: Int!
 *   instructions: String!
 * }
 */

exports.up = function(knex) {
  return knex.schema.createTable("steps", tbl => {
    // primary_key
    tbl.increments();

    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    tbl
      .integer("step_number")
      .unsigned()
      .notNullable();

    tbl.text("instructions").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("steps");
};
