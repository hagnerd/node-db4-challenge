const router = require("express").Router();
const { getRecipeById, getRecipes } = require("../controllers/recipe-book");

async function validateRecipeId(req, res, next) {
  const { id } = req.params;

  try {
    const recipe = await getRecipeById(id);

    if (!recipe) {
      res.status(404).json({
        message: "invalid recipe id"
      });
      return;
    }

    req.recipe = recipe;
    next();
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
}

router.get("/", async (_req, res) => {
  try {
    const recipes = await getRecipes();

    res.json({
      recipes
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});
router.get("/:id/shoppingList", validateRecipeId, (req, res) => {});
router.get("/:id/instructions", validateRecipeId, (req, res) => {});

module.exports = router;
