import React from "react";
import { screen } from "@testing-library/react";

import Keyboard from "./Keyboard";
import { assertKeyWithClass } from "../../../../Test/key";
import { renderWithRedux } from "../../../../Test/renderWithRedux";

test("keyboard loads the keys with the correct status", () => {
  const keyBoardType = [
    ["a", "b", "c", "d"],
    ["1", "2", "3", "4"],
  ];

  const statusKeys = {
    a: "wrong",
    b: "correct",
    c: "wrong",
    1: "misplaced",
    2: "correct",
    3: "wrong",
  };

  const attempts = ["a2b3", "bbc2", "b2b1"];

  const expectedAnswer = "b1b2";

  renderWithRedux(
    <Keyboard
      type={keyBoardType}
      attempts={attempts}
      expectedAnswer={expectedAnswer}
    />
  );

  keyBoardType.forEach((row) => {
    row.forEach((char) => {
      assertKeyWithClass(statusKeys[char], screen.getByText(char));
    });
  });
});
