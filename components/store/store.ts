import { configureStore } from "@reduxjs/toolkit";
import NavbarSlice from "../features/navbar/NavbarSlice";
export const store = configureStore({
  reducer: {
    navbar: NavbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
