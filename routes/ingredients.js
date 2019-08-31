const router = require("express").Router();

const {
  getIngredientById,
  getRecipesWithIngredient
} = require("../controllers/recipe-book");

async function validateIngredientId(req, res, next) {
  const { id } = req.params;

  try {
    const ingredient = await getIngredientById(id);

    if (!ingredient) {
      res.status(404).json({
        message: "invalid ingredient id"
      });
      return;
    }

    req.ingredient = ingredient;
    next();
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
      message: error.message
    });
  }
}

router.get("/:id/recipes", validateIngredientId, async (req, res) => {
  const { id } = req.params;

  try {
    const recipes = await getRecipesWithIngredient(id);

    if (recipes.length === 0) {
      res.json({
        message:
          "No recipes in your cookbook are currently using that ingredient"
      });
      return;
    }

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

module.exports = router;
