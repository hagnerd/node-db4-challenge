const db = require("../db");

async function getRecipeById(id) {
  const [recipe] = await db
    .select("*")
    .from("recipes")
    .where({ id });
  return recipe ? recipe : null;
}

function getRecipes() {
  return db.select("*").from("recipes");
}

async function getShoppingList(recipe_id) {}

async function getInstructions(recipe_id) {}

module.exports = {
  getRecipeById,
  getRecipes,
  getShoppingList,
  getInstructions
};
