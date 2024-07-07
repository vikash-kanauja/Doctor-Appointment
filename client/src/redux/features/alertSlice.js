import { createSlice } from "@reduxjs/toolkit";

// createaSlice are used to createting reducer function and action
export const alertSlice = createSlice({
  name: "alerts",
  initialState: {
    loading: false,
  },
  // reducers takes two things state and action 
  reducers: {
    showLoading: (state) => {
      state.loading = true;
    },
    hideLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { showLoading, hideLoading } = alertSlice.actions;
