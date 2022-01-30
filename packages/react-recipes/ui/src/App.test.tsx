import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Recipe, RecipeStatus } from "./types";

const fake_recipe: Recipe = {
  author: "Mitch",
  title: "Nacho Libre",
  status: RecipeStatus.DRAFT,
  steps: ["Step 1 cook", "step 2 eat"],
  ingredients: [],
};

test("renders page title", () => {
  render(<App get_recipes={() => [fake_recipe]} />);
  const heading = screen.getByText(/Recipes/i);
  expect(heading).toBeInTheDocument();
});
