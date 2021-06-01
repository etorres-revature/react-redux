import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

export const INCREMENT = "increment";
export const INCREASE = "increase";
export const DECREMENT = "decrement";
export const DECREASE = "decrease";
export const TOGGLE = "toggle";

createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment() {},
    increase() {},
    decrement() {},
    decrease() {},
    toggleCounter() {},
  },
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };
    case DECREMENT:
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };
    case DECREASE:
      return {
        counter: state.counter - action.amount,
        showCounter: state.showCounter,
      };
    case TOGGLE:
      return { counter: state.counter, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
