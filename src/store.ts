import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./redux/features/counterSlice";
// ekhane counterReucer name ta amake ekta dite hobe and counterSlice theke import kore oi reducer ta ante hobe

export const store = configureStore({
  reducer: {
    counterrr: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  // devTools: false,
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
