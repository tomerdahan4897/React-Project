import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchVideos } from "../../services/youtube-services";
import { Video, Videos, conditions } from "./vidoes.d";

const initialState: Videos = {
  loading: false,
  error: "",
  videos: [],
};

export const fetchVideo = createAsyncThunk<Video[], conditions>(
  "videos/fetchVideos",
  async ({ country, views }: conditions) => {
    const response = fetchVideos(country, views);
    return response;
  }
);

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.videos.findIndex((v) => v.id === action.payload);
      if (index !== -1) {
        state.videos[index].isFavorite = !state.videos[index].isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "something went wrong";
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.videos = action.payload;
      });
  },
});

export default videosSlice.reducer;
export const { toggleFavorite } = videosSlice.actions;
