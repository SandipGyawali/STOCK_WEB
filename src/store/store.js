import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/Auth/loginSignIn";
import { api } from "./api/apiSlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
