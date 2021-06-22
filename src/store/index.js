import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import webinarsReducer from "./slice/webinars";

const store = configureStore({
  reducer: {
    user: userReducer,
    webinars: webinarsReducer 
  },
});

export default store;