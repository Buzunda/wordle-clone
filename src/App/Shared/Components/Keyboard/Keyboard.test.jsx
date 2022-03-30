import React from "react";
import { render, screen } from "@testing-library/react";

import Keyboard from "./Keyboard";
import { assertKeyWithClass } from "../../../../Test/key";

test("keyboard loads the keys with the correct status", () => {
  const rows = [
    ["a", "b", "c"],
    ["1", "2", "3"],
  ];

  const statusKeys = {
    a: "misplaced",
    c: "wrong",
    1: "correct",
    2: "correct",
  };

  render(<Keyboard rows={rows} statusKeys={statusKeys} />);

  rows.forEach((row) => {
    row.forEach((char) => {
      assertKeyWithClass(statusKeys[char], screen.getByText(char));
    });
  });
});
