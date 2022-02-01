export enum RecipeStatus {
  DRAFT = "DRAFT",
  UNTRIED = "UNTRIED",
  TESTED = "TESTED",
}

export type Step = Array<string | number | Temperature>;

export interface Recipe {
  author: string;
  title: string;
  status: RecipeStatus | string;
  steps: Array<Step>;
  ingredients: Array<Ingredient>;
  source_title?: string;
  source_url?: string;
}

export interface Ingredient {
  name: string;
  amount?: number;
  unit?: string;
  description?: string;
}

export interface Temperature {
  degrees_celsius: number;
}

export enum TemperatureScale {
  Celsius,
  Fahrenheit,
  Kelvin,
}
