import { Recipe, RecipeStatus } from "./types";

const mock_recipe_list: Array<Recipe> = [
  {
    author: "Mitch",
    title: "Nachos",
    status: RecipeStatus.TESTED,
    steps: ["Get chips", "Get cheese", "Cook up"],
    ingredients: [
      { name: "cheese", amount: 100, unit: "grams" },
      { name: "chips", amount: 100, unit: "grams" },
      { name: "fire", amount: 100, unit: "grams" },
    ],
  },
  {
    author: "Anon",
    title: "Salmon Pasta",
    status: RecipeStatus.DRAFT,
    steps: [
      "Fry salmon with skin on",
      "Boil pasta",
      "Toss together with canned pesto",
    ],
    ingredients: [
      { name: "salmon", amount: 100, unit: "grams" },
      { name: "pasta", amount: 100, unit: "grams" },
      { name: "pesto", amount: 100, unit: "grams" },
    ],
  },
];

const get_recipe_list = () => mock_recipe_list;

export default get_recipe_list;
