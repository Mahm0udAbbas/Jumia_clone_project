import { configureStore } from "@reduxjs/toolkit";
import confirmationReducer from "./features/adressConfirmation"; // Assuming this is the file where your slice is defined
import toastReducer from "./toast/toastSlice"
const store = configureStore({
  reducer: {
    confirmation: confirmationReducer, // Add the slice reducer to the store under the key 'confirmation'
    // You can add other reducers here if you have more slices
    toast: toastReducer
  },
});

export default store;
