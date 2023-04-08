import userReducer from "./users/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  users: userReducer,
});

export default store;