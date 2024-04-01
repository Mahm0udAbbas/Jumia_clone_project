import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  value: false,
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;