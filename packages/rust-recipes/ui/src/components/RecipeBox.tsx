import { Recipe } from "../types";

interface RecipeBoxProps {
  recipe: Recipe;
}

const RecipeBox = (props: RecipeBoxProps) => {
  return (
    <>
      <h2>{props.recipe.title}</h2>
      <h3>By {props.recipe.author}</h3>
      <h4>Ingredients:</h4>
      <ul>
        {props.recipe.ingredients.map(function (ingredient, i) {
          return (
            <li key={ingredient.name}>
              {ingredient.name}, {ingredient.amount} {ingredient.unit}
            </li>
          );
        })}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {props.recipe.steps.map(function (step, i) {
          return <li key={step}>{step}</li>;
        })}
      </ol>
    </>
  );
};

export default RecipeBox;
