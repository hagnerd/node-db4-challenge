const db = require("../db");

async function getRecipeById(id) {
  const [recipe] = await db
    .select("*")
    .from("recipes")
    .where({ id });
  return recipe ? recipe : null;
}

async function getIngredientById(id) {
  const [ingredient] = await db
    .select("*")
    .from("ingredients")
    .where({ id });
  return ingredient ? ingredient : null;
}

function getRecipes() {
  return db.select("*").from("recipes");
}

async function getShoppingList(recipe_id) {
  return db
    .from("recipes_ingredients as ri")
    .innerJoin("ingredients as i", "i.id", "ri.ingredient_id")
    .select("i.name as ingredient", "ri.quantity", "ri.unit_of_measure")
    .where({ recipe_id });
}

async function getInstructions(recipe_id) {
  return db
    .select("*")
    .from("steps")
    .orderBy("step_number", "asc")
    .where({ recipe_id });
}

async function getRecipesWithIngredient(ingredient_id) {
  return db
    .from("recipes_ingredients as ri")
    .innerJoin("recipes as r", "r.id", "ri.recipe_id")
    .select("r.name")
    .where({ ingredient_id });
}

module.exports = {
  getRecipeById,
  getRecipes,
  getShoppingList,
  getInstructions,
  getIngredientById,
  getRecipesWithIngredient
};
