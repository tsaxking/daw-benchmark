use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn calculate(data: &[f64]) {
    data.iter().for_each(|i| { let _ = i * 2.0 / 4.0 + 47. - 256. * 45. / 13.; });
}
