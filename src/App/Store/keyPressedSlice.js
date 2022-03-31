import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: null };
export const keyPressedSlice = createSlice({
  name: "keyPressed",
  initialState,
  reducers: {
    setKeyPressed: (state, action) => {
      state.value = action.payload;
    },
    resetKeyPressed: () => initialState,
  },
});

export const { setKeyPressed, resetKeyPressed } = keyPressedSlice.actions;

export default keyPressedSlice.reducer;
