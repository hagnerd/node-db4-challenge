exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "spaghetti noodles" },
        { id: 2, name: "olive oil" },
        { id: 3, name: "onion" },
        { id: 4, name: "eggs" },
        { id: 5, name: "butter" },
        { id: 6, name: "paprika" },
        { id: 7, name: "salt" },
        { id: 8, name: "pepper" },
        { id: 9, name: "oregano" },
        { id: 10, name: "onion powder" },
        { id: 11, name: "garlic powder" },
        { id: 12, name: "cumin" },
        { id: 13, name: "cayenne pepper" },
        { id: 14, name: "sliced cheese" },
        { id: 15, name: "shredded cheese" },
        { id: 16, name: "burrito shells" },
        { id: 17, name: "ground beef" },
        { id: 18, name: "hamburger buns" },
        { id: 19, name: "spaghetti sauce" }
      ]);
    });
};
