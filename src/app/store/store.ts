import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});

store.subscribe(() => {
  const cart = store.getState().cart;
  sessionStorage.setItem("cart", JSON.stringify(cart));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
