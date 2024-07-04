import { configureStore } from "@reduxjs/toolkit"
import basketSlice from "./slices/basketSlice"
import likedItemsSlice from "./slices/likedItemsSlice"
import productSlice from './slices/productSlice'

const store = configureStore({
  reducer: {
    basket: basketSlice,
    likedItems: likedItemsSlice,
    product: productSlice,
  },
});

export default store;
