import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders page title", () => {
  render(<App fibResultFunction={(num: number) => 23} />);
  const heading = screen.getByText(/Recipes/i);
  expect(heading).toBeInTheDocument();
});
