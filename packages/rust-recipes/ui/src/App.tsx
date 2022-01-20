import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

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

const RecipeBox = (props: RecipeProps) => {
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
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 8 }}>
          <h1>Recipes!</h1>
          {recipe_list.map(function (recipe, i) {
            return <RecipeBox recipe={recipe} />;
          })}
        </Box>
      </Container>
    </>
  );
}

export default App;
