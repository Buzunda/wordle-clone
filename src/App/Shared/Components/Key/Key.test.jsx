import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Key from "./Key";
import { assertKeyWithClass } from "../../../../Test/key";

test("renders the key with the correct status and dispatches the correct action on click", () => {
  const mockStore = configureStore();

  const initialState = { value: null };
  const store = mockStore(initialState);
  const status = "correct";
  const key = "z";

  render(
    <Provider store={store}>
      <Key status={status}>{key}</Key>
    </Provider>
  );

  const keyElement = screen.getByText(key);

  assertKeyWithClass(status, keyElement);

  keyElement.click();

  const actions = store.getActions();
  expect(actions).toEqual([
    {
      payload: "z",
      type: "keyPressed/setKeyPressed",
    },
  ]);
});
