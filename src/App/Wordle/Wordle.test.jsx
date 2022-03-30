import React from "react";
import { render, screen } from "@testing-library/react";

import Wordle from "./Wordle";

test("wordle loads a game board and a qwerty keyboard", () => {
  const amount = 5;
  const countTries = 6;

  render(<Wordle />);

  expect(screen.getAllByRole("textbox").length).toEqual(amount * countTries);
  expect(screen.getAllByRole("button").length).toEqual(26);
});
