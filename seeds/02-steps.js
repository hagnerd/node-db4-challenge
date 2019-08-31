exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          id: 1,
          recipe_id: 1,
          step_number: 1,
          instructions:
            "Take a pot of water and start boiling it. Add salt, and olive oil"
        },
        {
          id: 2,
          recipe_id: 1,
          step_number: 2,
          instructions:
            "Start a pan on medium high heat. Once hot, add the sausage."
        },
        {
          id: 3,
          recipe_id: 1,
          step_number: 3,
          instructions: "While the sausage is browning, cut your onions."
        },
        {
          id: 4,
          recipe_id: 1,
          step_number: 4,
          instructions:
            "Add in the onions, oregano, salt, pepper, and garlic powder once the meat is 3/4 browned"
        },
        {
          id: 5,
          recipe_id: 1,
          step_number: 5,
          instructions: "Add your noodles to your now boiling pot."
        },
        {
          id: 6,
          recipe_id: 1,
          step_number: 6,
          instructions:
            "Once your meat is fully browned, and your onions have sweated, add your delicious 16oz can of store bought spaghetti sauce. Cover and let simmer."
        },
        {
          id: 7,
          recipe_id: 1,
          step_number: 7,
          instructions:
            "Once your noodles are just under being done, strain them and transfer the strained noodles directly into the spaghetti sauce."
        },
        {
          id: 8,
          recipe_id: 1,
          step_number: 8,
          instructions: "Enjoy."
        },

        {
          id: 9,
          recipe_id: 2,
          step_number: 1,
          instructions:
            "Crack the eggs into a bowl and whisk until slightly frothy."
        },
        {
          id: 10,
          recipe_id: 2,
          step_number: 2,
          instructions:
            "Start two pans on the stove. One at medium - low, and one at medium - high."
        },
        {
          id: 11,
          recipe_id: 2,
          step_number: 3,
          instructions:
            "In the low heat pan, warm your tortillas up, giving about a minute per side"
        },
        {
          id: 12,
          recipe_id: 2,
          step_number: 4,
          instructions: "Dice your onions."
        },
        {
          id: 13,
          recipe_id: 2,
          step_number: 5,
          instructions:
            "Add your onions, and a little bit of butter to the medium heat pan."
        },
        {
          id: 14,
          recipe_id: 2,
          step_number: 6,
          instructions:
            "While your onions are sweating, add your oregano, cumin, cayenne pepper, salt, pepper, paprika, and garlic powder. Top with another quarter tablespoon of butter."
        },
        {
          id: 15,
          recipe_id: 2,
          step_number: 7,
          instructions:
            "Add your eggs into the pan, turning down the temperature to medium. Keep the eggs moving, in a folding motion, to make them fluffy."
        },
        {
          id: 16,
          recipe_id: 2,
          step_number: 8,
          instructions:
            "When the eggs are close to being done top with cheese, turn off the burner, and cover."
        },
        {
          id: 17,
          recipe_id: 2,
          step_number: 9,
          instructions:
            "Assemble your burritos, and top with hot sauce and sour cream for extra deliciousness."
        },

        {
          id: 18,
          recipe_id: 3,
          step_number: 1,
          instructions:
            "Take your ground beef and place it in a mixing bowl. Add salt, pepper, onion powder, garlic powder, and paprika, mixing thoroughly throughout the meat."
        },
        {
          id: 19,
          recipe_id: 3,
          step_number: 2,
          instructions: "Form into equal sized patties."
        },
        {
          id: 20,
          recipe_id: 3,
          step_number: 3,
          instructions:
            "Slice your onion into long slices, and start a pan on medium high heat."
        },
        {
          id: 21,
          recipe_id: 3,
          step_number: 4,
          instructions:
            "Once the pan is hot, add a tablespoon of butter, and the onions."
        },
        {
          id: 22,
          recipe_id: 3,
          step_number: 5,
          instructions:
            "When the onions are brown, set aside, and begin placing the patties into the pan. Press your thumb in the center of each patty to make a pocket. This helps prevent the patty from rounding up."
        },
        {
          id: 23,
          recipe_id: 3,
          step_number: 6,
          instructions:
            "Depending on how done you want your burgers, cook for about 2-4 minutes, flip, and then cook for an additional 2-4 minutes. Use a meat thermometer to check if it is properly temped for how you want it done."
        },
        {
          id: 24,
          recipe_id: 3,
          step_number: 7,
          instructions:
            "Turn off the heat, top with slices of cheese, and cover with a lid."
        },
        {
          id: 25,
          recipe_id: 3,
          step_number: 8,
          instructions:
            "Assemble your buns, getting any condiments and sides ready, and then place your burger on the bottom bun, and top with the carmelized onions."
        }
      ]);
    });
};
