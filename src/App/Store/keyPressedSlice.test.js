import reducer, { setKeyPressed, resetKeyPressed } from "./keyPressedSlice";

test("initializes, sets and resets correctly the keyPressed slice", () => {
  const emptyState = {};

  expect(reducer(undefined, emptyState)).toEqual({
    value: null,
  });

  expect(reducer(emptyState, setKeyPressed("a"))).toEqual({
    value: "a",
  });

  expect(reducer(emptyState, resetKeyPressed())).toEqual({
    value: null,
  });
});
