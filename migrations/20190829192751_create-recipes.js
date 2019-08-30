/*
 * Recipe {
 *   id: ID!
 *   name: String!
 * }
 *
 * */

exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    // primary key
    tbl.increments();
    tbl.text("name").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes");
};
