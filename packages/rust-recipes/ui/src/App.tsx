import React from "react";
import "./App.css";

enum RecipeStatus {
  DRAFT,
  UNTRIED,
  TESTED,
}

interface Recipe {
  author: string;
  title: string;
  status: RecipeStatus;
  steps: Array<string>;
}

const recipe_list: Array<Recipe> = [
  {
    author: "Mitch",
    title: "Nachos",
    status: RecipeStatus.TESTED,
    steps: ["Get chips", "Get cheese", "Cook up"],
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
  },
];

interface RecipeProps {
  recipe: Recipe;
}

const Recipe = (props: RecipeProps) => {
  return (
    <>
      <h2>{props.recipe.title}</h2>
      <h3>By {props.recipe.author}</h3>
      {props.recipe.steps.map(function (step, i) {
        return (
          <div>
            {i}. {step}
          </div>
        );
      })}
    </>
  );
};

function App() {
  return (
    <>
      <div>Recipes!</div>
      {recipe_list.map(function (recipe, i) {
        return <Recipe recipe={recipe} />;
      })}
    </>
  );
}

export default App;
