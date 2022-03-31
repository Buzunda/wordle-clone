import { configureStore } from "@reduxjs/toolkit";
import keyPressedReducer from "./keyPressedSlice";

export default configureStore({
  reducer: {
    keyPressed: keyPressedReducer,
  },
});
