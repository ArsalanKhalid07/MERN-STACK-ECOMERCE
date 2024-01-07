import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/counter/counterSlice';
import productReducer from "../Redux/productList/productListSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    productList: productReducer
  },
});
