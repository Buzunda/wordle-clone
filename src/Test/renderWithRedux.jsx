import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import keyPressedReducer from "../App/Store/keyPressedSlice";

const renderWithRedux = (
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: { keyPressed: keyPressedReducer },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
export { renderWithRedux };
