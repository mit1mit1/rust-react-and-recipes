import { Recipe } from "../types";
import Slider from "@mui/material/Slider"
import { useState } from "react";

interface RecipeBoxProps {
  recipe: Recipe;
}

const RecipeBox = ({ recipe }: RecipeBoxProps) => {
  const [scale, setScale] = useState(1);

  return (
    <>
      <h2>{recipe.title}</h2>
      <h3>By {recipe.author}</h3>
      {recipe.source_title ? <div>Source: {recipe.source_title}</div> : ""}
      {recipe.source_url ? <a>{recipe.source_url}</a> : ""}
      <h4>Scale:</h4>
      <Slider
        aria-label="Recipe Scale"
        defaultValue={1}
        // getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={(e, value) => setScale(typeof value === "number" ? value : value[0])}
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
              {ingredient.name}, {ingredient.amount * scale} {ingredient.unit}
            </li>
          );
        })}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map(function (step, i) {
          return <li key={step[0]}>{
            step.map(function (substring) {
              return <span> {typeof substring === "number" ? substring * scale : substring} </span>
            })}</li>;
        })}
      </ol>
    </>
  );
};

export default RecipeBox;
