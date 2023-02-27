import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import VideoReducer from "../features/videos/videosSlice";
import sponserReducer from "../features/sponsers/sponserSlice";

export const store = configureStore({
  reducer: {
    videos: VideoReducer,
    sponsers: sponserReducer,
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
