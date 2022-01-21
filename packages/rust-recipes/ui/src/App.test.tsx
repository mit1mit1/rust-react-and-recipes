import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page title", () => {
  render(<App hit_rust={() => [1, 2, 3, 4]} />);
  const heading = screen.getByText(/Recipes/i);
  expect(heading).toBeInTheDocument();
});
