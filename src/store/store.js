import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./feature/CartSlice";

export const store = configureStore({ reducer: {
    product: CartSlice
} });