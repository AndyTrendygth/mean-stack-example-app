use('test');

db.getCollection('recipes').insertMany([
    {
      "title": "Spaghetti Bolognese",
      "description": "Classic Italian pasta dish with a rich meat sauce.",
      "category": "main course",
      "ingredients": [
        {
          "name": "Spaghetti",
          "quantity": 200,
          "unit": "grams"
        },
        {
          "name": "Ground beef",
          "quantity": 300,
          "unit": "grams"
        },
        {
          "name": "Tomato sauce",
          "quantity": 400,
          "unit": "ml"
        },
        {
          "name": "Onion",
          "quantity": 1,
          "unit": "piece"
        },
        {
          "name": "Garlic",
          "quantity": 2,
          "unit": "cloves"
        },
        {
          "name": "Olive oil",
          "quantity": 2,
          "unit": "tablespoons"
        },
        {
          "name": "Salt",
          "quantity": 1,
          "unit": "teaspoon"
        },
        {
          "name": "Black pepper",
          "quantity": 0.5,
          "unit": "teaspoon"
        }
      ],
      "instructions": "1. Cook spaghetti according to package instructions. 2. In a pan, sauté chopped onion and garlic in olive oil. 3. Add ground beef and cook until browned. 4. Pour in tomato sauce and season with salt and black pepper. 5. Simmer for 15-20 minutes. 6. Serve meat sauce over cooked spaghetti.",
    },
    {
      "title": "Pancakes",
      "description": "Fluffy and delicious pancakes for a perfect breakfast.",
      "category": "breakfast",
      "ingredients": [
        {
          "name": "All-purpose flour",
          "quantity": 1,
          "unit": "cup"
        },
        {
          "name": "Milk",
          "quantity": 1,
          "unit": "cup"
        },
        {
          "name": "Egg",
          "quantity": 1,
          "unit": "piece"
        },
        {
          "name": "Baking powder",
          "quantity": 1,
          "unit": "teaspoon"
        },
        {
          "name": "Sugar",
          "quantity": 1,
          "unit": "tablespoon"
        },
        {
          "name": "Salt",
          "quantity": 0.5,
          "unit": "teaspoon"
        },
        {
          "name": "Butter",
          "quantity": 2,
          "unit": "tablespoons",
          "notes": "For greasing the pan"
        }
      ],
      "instructions": "1. In a bowl, whisk together flour, baking powder, sugar, and salt. 2. In another bowl, whisk together milk and egg. 3. Pour wet ingredients into dry ingredients and stir until just combined. 4. Heat a pan over medium heat, grease with butter. 5. Pour 1/4 cup of batter onto the pan for each pancake. 6. Cook until bubbles form on the surface, then flip and cook the other side. 7. Repeat with the remaining batter.",
    },
    {
      "title": "Brownies",
      "description": "Indulgent chocolate brownies for a sweet treat.",
      "category": "dessert",
      "ingredients": [
        {
          "name": "Butter",
          "quantity": 1,
          "unit": "cup"
        },
        {
          "name": "Granulated sugar",
          "quantity": 2,
          "unit": "cups"
        },
        {
          "name": "Eggs",
          "quantity": 4,
          "unit": "pieces"
        },
        {
          "name": "Vanilla extract",
          "quantity": 1,
          "unit": "teaspoon"
        },
        {
          "name": "All-purpose flour",
          "quantity": 1,
          "unit": "cup"
        },
        {
          "name": "Cocoa powder",
          "quantity": 1,
          "unit": "cup"
        },
        {
          "name": "Salt",
          "quantity": 0.5,
          "unit": "teaspoon"
        },
        {
          "name": "Walnuts",
          "quantity": 1,
          "unit": "cup",
          "notes": "Optional, chopped"
        }
      ],
      "instructions": "1. Preheat the oven to 350°F (175°C). 2. Melt butter and mix with sugar until well combined. 3. Add eggs one at a time, beating well after each addition. 4. Stir in vanilla extract. 5. In a separate bowl, combine flour, cocoa powder, and salt. 6. Gradually add dry ingredients to the wet ingredients, mixing until just combined. 7. Fold in chopped walnuts if using. 8. Pour batter into a greased baking pan. 9. Bake for 30-35 minutes or until a toothpick inserted comes out with moist crumbs. 10. Allow to cool before cutting into squares.",
    }
  ])