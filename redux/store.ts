import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cart.slices";

const store = configureStore({
  reducer: { cart: cartSlices },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;
export default store;
