use wasm_bindgen::prelude::*;
use std::collections::HashMap;


#[wasm_bindgen]
pub fn fib() -> String {
   return String::from("Test rusty string");
}

use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
pub struct Example {
    pub field1: HashMap<u32, String>,
    pub field2: Vec<Vec<f32>>,
    pub field3: [f32; 4],
}

#[wasm_bindgen]
pub fn send_example_to_js() -> JsValue {
    let mut field1 = HashMap::new();
    field1.insert(0, String::from("ex"));
    let example = Example {
        field1,
        field2: vec![vec![1., 2.], vec![3., 4.]],
        field3: [1., 2., 3., 4.]
    };

    JsValue::from_serde(&example).unwrap()
}

#[wasm_bindgen]
pub fn receive_example_from_js(val: &JsValue) {
    let example: Example = val.into_serde().unwrap();
}
