import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type Status = "idle" | "loading" | "succeeded" | "failed";
interface Post {
  id: number;
  title: string;
  body: string;
}

interface State {
  posts: Post[];
  post: Post | null;
  postsStatus: Status;
  postStatus: Status;
  error: any;
}
const initialState: State = {
  posts: [],
  post: null,
  postsStatus: "idle",
  postStatus: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (limit: number) => {
    try {
      const response = await axios.get(`posts?_limit=${limit}`);
      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);
export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById",
  async (postId: number) => {
    try {
      const response = await axios.get(`posts/${postId}`);

      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);
export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (post: { title: string; body: string }) => {
    try {
      const response = await axios.post("posts", post);

      return response.data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);
export const removePost = createAsyncThunk(
  "posts/removePost",
  async (postId: number) => {
    try {
      const response = await axios.delete(`posts/${postId}`);

      return postId;
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.postsStatus = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.postsStatus = "succeeded";

        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.postsStatus = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPostById.pending, (state, action) => {
        state.postStatus = "loading";
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.postStatus = "succeeded";
        state.post = action.payload;
      })
      .addCase(fetchPostById.rejected, (state, action) => {
        state.postStatus = "failed";
      })

      .addCase(addNewPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post: any) => {
          return post.id !== action.payload;
        });
      });
  },
});

export default postsSlice.reducer;
