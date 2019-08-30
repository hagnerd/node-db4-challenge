/*
 * Ingredient {
 *   id: ID!
 *   name: String!
 * }
 */

exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    // primary_key
    tbl.increments();

    tbl.text("name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
