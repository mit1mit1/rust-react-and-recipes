export enum RecipeStatus {
  DRAFT,
  UNTRIED,
  TESTED,
}

export interface Recipe {
  author: string;
  title: string;
  status: RecipeStatus;
  steps: Array<string>;
  ingredients: Array<Ingredient>;
  source_title?: string;
  source_url?: string;
}

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
}
