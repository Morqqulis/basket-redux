import { createSlice } from "@reduxjs/toolkit";

const likedItemsSlice = createSlice({
  name: "likedItems",
  initialState: {
    items: [],
  },
  reducers: {
    addToLikedItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      state.items.push(action.payload);
    },

    removeFromLikedItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);

      state.items = [...state.items];
    },
  },
});

export const { addToLikedItems, removeFromLikedItems } =
  likedItemsSlice.actions;
export default likedItemsSlice.reducer;
