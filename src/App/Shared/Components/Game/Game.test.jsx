import React from "react";

import Game from "./Game";
import { fillWord, keydownActiveInput } from "../../../../Test/helpers";
import {
  assertInputBoxRowActive,
  assertInputBoxRowDisabled,
} from "../../../../Test/inputBox";
import { renderWithRedux } from "../../../../Test/renderWithRedux";
import { KeyboardTypes } from "../../Constants/keyboardTypes";

const validInputRegExp = /^[a-zA-Z]$/;
const amount = 5;
const countTries = 6;
const expectedAnswer = "fight";

test("game loads and plays correctly when typing a word ", () => {
  renderWithRedux(
    <Game
      expectedAnswer={expectedAnswer}
      amount={amount}
      countTries={countTries}
      validInputRegExp={validInputRegExp}
      keyboardType={KeyboardTypes.QWERTY}
    />
  );

  assertInputBoxRowActive(0, amount);

  for (let i = 1; i < countTries; i++) {
    assertInputBoxRowDisabled(i, amount);
  }

  fillWord("steak");
  keydownActiveInput("Enter");

  assertInputBoxRowActive(1, amount);
});

test("game ends when correct value is attempted", () => {
  renderWithRedux(
    <Game
      expectedAnswer={expectedAnswer}
      amount={amount}
      countTries={countTries}
      validInputRegExp={validInputRegExp}
      keyboardType={KeyboardTypes.QWERTY}
    />
  );

  fillWord("fight");
  keydownActiveInput("Enter");

  for (let i = 1; i < countTries; i++) {
    assertInputBoxRowDisabled(i, amount);
  }
});
