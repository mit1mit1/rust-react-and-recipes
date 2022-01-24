use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct RustRecipe {
    pub author: String,
    pub title: String,
    pub status: String,
    pub steps: Vec<String>,
}


// const mock_recipe_list: Array<Recipe> = [
//   {
//     author: "Mitch",
//     title: "Nachos",
//     status: RecipeStatus.TESTED,
//     steps: ["Get chips", "Get cheese", "Cook up"],
//   },
//   {
//     author: "Anon",
//     title: "Salmon Pasta",
//     status: RecipeStatus.DRAFT,
//     steps: [
//       "Fry salmon with skin on",
//       "Boil pasta",
//       "Toss together with canned pesto",
//     ],
//   },
// ];

#[wasm_bindgen]
pub fn send_recipes_to_js() -> JsValue {
    let recipe1 = RustRecipe {
      author: String::from("Mitch"),
      title: String::from("Nachos"),
      status: String::from("TESTED"),
      steps: vec![String::from("Get chips"), String::from("Get cheese"), String::from("Cook up")],
    };

    let recipe2 = RustRecipe {
        author: String::from("Anon"),
        title: String::from("Salmon Pasta"),
        status: String::from("DRAFT"),
        steps: vec![String::from("Fry salmon with skin on"), String::from("Boil pasta"), String::from("Toss together with canned pesto")],
      };

    let recipes = vec![recipe1, recipe2];


    JsValue::from_serde(&recipes).unwrap()
}

#[wasm_bindgen]
pub fn receive_example_from_js(val: &JsValue) {
    let example: RustRecipe = val.into_serde().unwrap();
}
