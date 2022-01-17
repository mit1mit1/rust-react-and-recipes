mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
#[repr(u8)]
#[derive(Clone, Copy, Debug, PartialEq, Eq)]
pub enum RecipeStatus {
    Draft,
    Untried,
    Tested,
}

#[wasm_bindgen]
pub struct Recipe {
    recipe_status: RecipeStatus,
    time: String,
    content: String,
}


#[wasm_bindgen]
pub struct RecipeList {
    recipes: Vec<Recipe>,
}

/// Public methods, exported to JavaScript.
#[wasm_bindgen]
impl RecipeList {
    pub fn new() -> RecipeList {
        let length = 64;

        let recipes = (0..length)
            .map(|i| {
                if i % 2 == 0 || i % 7 == 0 {
                    Recipe {
                        recipe_status: RecipeStatus::Draft,
                        time: String::from("12:00 noon"),
                        content: String::from("Mash potatoes with cumin")
                    }
                } else {
                    Recipe {
                        recipe_status: RecipeStatus::Untried,
                        time: String::from("12:00 midnight"),
                        content: String::from("Bake corn chips with cheese")
                    }
                }
            })
            .collect();

        RecipeList {
            recipes,
        }
    }

    pub fn render(&self) -> String {
        self.to_string()
    }
}

use std::fmt;

impl fmt::Display for RecipeList {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for recipe in self.recipes.as_slice() {
            write!(f, "Recipe content is {}", recipe.content)?;
        }

        write!(f, "End")?;
        Ok(())
    }
}
