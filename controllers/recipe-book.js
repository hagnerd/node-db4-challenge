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

async function getShoppingList(recipe_id) {
  return (
    db
      .from("recipes_ingredients as ri")
      // I don't think I need this join, or anything from the recipe?
      // Maybe the recipe name?
      // .innerJoin('recipes as r', 'r.id', 'ri.recipe_id')
      .innerJoin("ingredients as i", "i.id", "ri.ingredient_id")
      .select("i.name as ingredient", "ri.quantity", "ri.unit_of_measure")
      .where({ recipe_id })
  );
}

async function getInstructions(recipe_id) {}

module.exports = {
  getRecipeById,
  getRecipes,
  getShoppingList,
  getInstructions
};
