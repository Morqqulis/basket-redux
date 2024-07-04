import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      state.items = [...state.items];
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
