import { combineReducers } from "redux";
import { productReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  products: selectedProductsReducer
});

export default reducers;
