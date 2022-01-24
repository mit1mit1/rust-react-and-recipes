import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export enum RecipeStatus {
  DRAFT,
  UNTRIED,
  TESTED,
}

export interface Recipe {
  author: string;
  title: string;
  status: RecipeStatus;
  steps: Array<string>;
}

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

interface AppProps {
  get_recipes: () => Array<Recipe>;
}

function App(props: AppProps) {
  console.log(props.get_recipes());
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 8 }}>
          <h1>Recipes!</h1>
          {props.get_recipes().map(function (recipe, i) {
            return <RecipeBox recipe={recipe} />;
          })}
        </Box>
      </Container>
    </>
  );
}

export default App;
