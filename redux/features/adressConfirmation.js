// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../axiosConfig/instance";

// export const moviesAction = createAsyncThunk("CatProducds/getAll", async (page) => {
//   const response = await axiosInstance.get(`/3/movie/popular?&page=${page}`);
//   return response.data.results;
// });

// const moviesSlice = createSlice({
//   name: "movies",
//   initialState: { movies: [] },
//   extraReducers: (builder) => {
//     builder.addCase(moviesAction.fulfilled, (state, action) => {
//       state.movies = action.payload;
//     });
//   },
// });
// console.log(moviesSlice.reducer);
// export default moviesSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  confirmed: false,
};

// Create slice
const confirmationSlice = createSlice({
  name: "confirmation",
  initialState,
  reducers: {
    // Action to set confirmation to true
    confirm: (state) => {
      state.confirmed = true;
    },
    // Action to set confirmation to false
    resetConfirmation: (state) => {
      state.confirmed = false;
    },
  },
});

// Export actions and reducer
export const { confirm, resetConfirmation } = confirmationSlice.actions;
export default confirmationSlice.reducer;
