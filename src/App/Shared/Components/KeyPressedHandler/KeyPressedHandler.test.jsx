import React from "react";
import { render } from "@testing-library/react";

import KeyPressedHandler from "./KeyPressedHandler";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import { fillWord } from "../../../../Test/helpers";

test("KeyWatcher dispatches the correct actions for every key typed", () => {
  const mockStore = configureStore();

  const initialState = { value: null };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <KeyPressedHandler />
    </Provider>
  );

  const word = "steve18>tony";

  fillWord(word);

  const expectedActions = [];

  Array.from(word).forEach((charKey) => {
    expectedActions.push({
      payload: charKey,
      type: "keyPressed/setKeyPressed",
    });
  });

  const actions = store.getActions();
  expect(actions).toEqual(expectedActions);
});
