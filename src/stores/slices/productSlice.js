import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../data";

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: productsData.map((product) => ({ ...product })),
  },
  reducers: {
    increaseCount: (state, action) => {
      const { id } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product) {
        product.count += 1;
      }
    },
    decreaseCount: (state, action) => {
      const { id } = action.payload;
      const product = state.items.find((item) => item.id === id);
      if (product && product.count > 0) {
        product.count -= 1;
      }
    },
  },
});

export const { increaseCount, decreaseCount } = productSlice.actions;
export default productSlice.reducer;
