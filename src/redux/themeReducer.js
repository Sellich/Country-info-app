import { createSlice } from "@reduxjs/toolkit";

const themeState = {
  darkTheme: false
};

const themeSlice = createSlice({
  name: "theme",
  initialState: themeState,
  reducers: {
    setTheme(state, action) {
      state.darkTheme = action.payload
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
