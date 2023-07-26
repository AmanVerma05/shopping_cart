import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/data";

const initialState = {
  productData: data,
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.cart.push(newItem);
        alert("item added to cart") 
        // console.log("quantity", state.quantity)
      }
    },

    addQTY: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push(newItem);
      }
    },

    removeQTY: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity -= 1;
      } else {
        state.cart.push(newItem);
      }
    },

    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },

    clearCart: (state, action) => {
      state.cart = []
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, addQTY, removeQTY, removeProductFromCart, clearCart } =
  cartSlice.actions;