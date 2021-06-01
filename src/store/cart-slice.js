import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
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
    },
  },
});

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending....",
        message: "Sending Cart Data Now.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("urlGoesHere...", {
        method: "PUT",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed!");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success...",
          message: "Cart Data sent successfully.",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Cart Data failed to send.",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
