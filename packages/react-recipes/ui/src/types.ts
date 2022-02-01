export enum RecipeStatus {
  DRAFT = "DRAFT",
  UNTRIED = "UNTRIED",
  TESTED = "TESTED",
}

export interface Recipe {
  author: string;
  title: string;
  status: RecipeStatus | string;
  steps: Array<Array<string | number>>;
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
