import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogsSlice";
import categoryReducer from "../features/categoriesSlice";
import hello from "../"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    blogs: blogReducer,
    categories: categoryReducer,
  },
});