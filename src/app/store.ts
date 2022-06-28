import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import homeReducer from "./features/homeSlice";
import postReducer from "./features/postsSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    posts: postReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
