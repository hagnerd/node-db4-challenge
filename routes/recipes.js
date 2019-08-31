const router = require("express").Router();
const {
  getRecipeById,
  getRecipes,
  getShoppingList,
  getInstructions
} = require("../controllers/recipe-book");

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

router.get("/:id/shoppingList", validateRecipeId, async (req, res) => {
  const { id } = req.params;

  try {
    const shoppingList = await getShoppingList(id);

    res.json({
      shoppingList
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

router.get("/:id/instructions", validateRecipeId, async (req, res) => {
  const { id } = req.params;

  try {
    const instructions = await getInstructions(id);

    res.json({
      instructions
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
});

module.exports = router;
