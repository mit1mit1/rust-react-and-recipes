use wasm_bindgen::prelude::*;


#[wasm_bindgen]
pub fn fib() -> String {
   return String::from("Test rusty string");
}

use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct RustRecipe {
    pub author: String,
    pub title: String,
    pub status: String,
    pub steps: Vec<String>,
}

#[wasm_bindgen]
pub fn send_example_to_js() -> JsValue {
    let mut string1 = String::from("str1");
    let mut string2 = String::from("str2");
    let example = RustRecipe {
      author: String::from("str1"),
      title: String::from("str2"),
      status: String::from("str1"),
      steps: vec![String::from("str1"), String::from("str2")],
    };

    JsValue::from_serde(&example).unwrap()
}

#[wasm_bindgen]
pub fn receive_example_from_js(val: &JsValue) {
    let example: RustRecipe = val.into_serde().unwrap();
}
