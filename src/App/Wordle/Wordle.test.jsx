import React from "react";
import { screen } from "@testing-library/react";

import Wordle from "./Wordle";
import { renderWithRedux } from "../../Test/renderWithRedux";

test("wordle loads a game board and a qwerty keyboard", () => {
  renderWithRedux(<Wordle />);

  expect(screen.getByRole("heading", { name: "Wordle" })).toBeInTheDocument();
  expect(screen.getAllByRole("button").length).toEqual(26);
});
