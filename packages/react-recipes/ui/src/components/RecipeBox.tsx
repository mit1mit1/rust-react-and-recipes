import { Recipe, TemperatureScale } from "../types";
import Slider from "@mui/material/Slider";
import { useState } from "react";
import StepList from "./StepList";

interface RecipeBoxProps {
  recipe: Recipe;
  temperature_scale: TemperatureScale;
}

const RecipeBox = ({ recipe, temperature_scale }: RecipeBoxProps) => {
  const [multiplier, setMultiplier] = useState(1);

  return (
    <>
      <h2>{recipe.title}</h2>
      <h3>By {recipe.author}</h3>
      {recipe.source_title ? <div>Source: {recipe.source_title}</div> : ""}
      {recipe.source_url ? (
        <a href={recipe.source_url}>{recipe.source_url}</a>
      ) : (
        ""
      )}
      <h4>Scale:</h4>
      <Slider
        aria-label="Recipe Scale"
        defaultValue={1}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={(e, value) =>
          setMultiplier(typeof value === "number" ? value : value[0])
        }
        step={0.5}
        marks
        min={0}
        max={4}
      />
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map(function (ingredient, i) {
          return (
            <li key={ingredient.name}>
              {ingredient.name},{" "}
              {ingredient.amount ? ingredient.amount * multiplier : ""}{" "}
              {ingredient.unit} <i>{ingredient.description}</i>
            </li>
          );
        })}
      </ul>
      <h4>Steps:</h4>
      <StepList
        steps={recipe.steps}
        multiplier={multiplier}
        temperature_scale={temperature_scale}
      />
    </>
  );
};

export default RecipeBox;
