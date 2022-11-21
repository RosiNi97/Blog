import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface NavbarInterface {
  logged: boolean;
}
const initialState: NavbarInterface = { logged: false };
const NavbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    login: (state, action) => {
      state;
    },
  },
});
export default NavbarSlice.reducer;
