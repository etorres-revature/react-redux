import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const addedItem = action.payload;

      const { id, price, title } = addedItem;

      state.totalQuantity++;

      const existingItem = state.items.find((item) => item.id === addedItem.id);

      if (!existingItem) {
        state.items.push({
          id,
          price,
          quantity: 1,
          totalPrice: price,
          name: title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + price;
      }

      state.changed = true;
    },

    removeItemFromCart(state, action) {
      const id = action.payload;

      state.totalQuantity--;

      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice = existingItem.price;
      }

      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
