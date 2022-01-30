import { Recipe } from "../types";

interface RecipeBoxProps {
  recipe: Recipe;
}

const RecipeBox = ({ recipe }: RecipeBoxProps) => {
  return (
    <>
      <h2>{recipe.title}</h2>
      <h3>By {recipe.author}</h3>
      {recipe.source_title ? <div>Source: {recipe.source_title}</div> : ""}
      {recipe.source_url ? <a>{recipe.source_url}</a> : ""}
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map(function (ingredient, i) {
          return (
            <li key={ingredient.name}>
              {ingredient.name}, {ingredient.amount} {ingredient.unit}
            </li>
          );
        })}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {recipe.steps.map(function (step, i) {
          return <li key={step}>{step}</li>;
        })}
      </ol>
    </>
  );
};

export default RecipeBox;
