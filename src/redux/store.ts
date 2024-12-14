import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./reducer";

export const store = configureStore({
  reducer: todoReducer,
});

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;