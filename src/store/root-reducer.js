import { combineReducers } from "redux";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { persistStore,persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
