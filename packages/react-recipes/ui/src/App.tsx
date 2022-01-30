import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Recipe } from "./types";
import RecipeBox from "./components/RecipeBox";

interface AppProps {
  get_recipes: () => Array<Recipe>;
}

function App(props: AppProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 8 }}>
          <h1>Recipes!</h1>
          {props.get_recipes().map(function (recipe, i) {
            return <RecipeBox recipe={recipe} key={recipe.title} />;
          })}
        </Box>
      </Container>
    </>
  );
}

export default App;
