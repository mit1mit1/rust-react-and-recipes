import React, { useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Recipe, TemperatureScale } from "./types";
import RecipeBox from "./components/RecipeBox";

interface AppProps {
  get_recipes: () => Array<Recipe>;
}

const App = (props: AppProps) => {
  const [temperature_scale, setTemperatureScale] = useState(
    TemperatureScale.Celsius
  );

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ my: 8 }}>
          <h4>Temperature Units:</h4>
          <Select
            aria-label="Temperature Units"
            defaultValue={TemperatureScale.Celsius}
            // getAriaValueText={valuetext}
            onChange={(e, value) => {
              console.log(e);
              console.log(value);
              setTemperatureScale(e.target.value as TemperatureScale);
            }}
          >
            <MenuItem value={TemperatureScale.Celsius}>Celsius</MenuItem>
            <MenuItem value={TemperatureScale.Fahrenheit}>Fahrenheit</MenuItem>
            <MenuItem value={TemperatureScale.Kelvin}>Kelvin</MenuItem>
          </Select>
          <h1>Recipes!</h1>
          {props.get_recipes().map(function (recipe) {
            return (
              <RecipeBox
                recipe={recipe}
                key={recipe.title}
                temperature_scale={temperature_scale}
              />
            );
          })}
        </Box>
      </Container>
    </>
  );
};

export default App;
