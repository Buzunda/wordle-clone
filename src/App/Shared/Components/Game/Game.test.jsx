import React from "react";
import { render } from "@testing-library/react";

import Game from "./Game";
import { fillWord, keydownActiveInput } from "../../../../Test/Helpers";
import {
  assertInputBoxRowActive,
  assertInputBoxRowDisabled,
} from "../../../../Test/inputBox";

test("game loads correctly with initial configurations", () => {
  const amount = 5;
  const countTries = 6;
  const expectedAnswer = "fight";
  const setAttempts = jest.fn();

  render(
    <Game
      amount={amount}
      countTries={countTries}
      expectedAnswer={expectedAnswer}
      attempts={[]}
      setAttempts={setAttempts}
    />
  );

  assertInputBoxRowActive(0, amount);

  for (let i = 1; i < countTries; i++) {
    assertInputBoxRowDisabled(i, amount);
  }

  fillWord("steak");
  keydownActiveInput("Enter");

  expect(setAttempts).toHaveBeenCalledWith(["steak"]);
});

test("game plays correctly after 4 incorrect attempts", () => {
  const amount = 5;
  const countTries = 6;
  const expectedAnswer = "fight";
  const attempts = ["amount", "haste", "plate"];
  const setAttempts = jest.fn();

  render(
    <Game
      amount={amount}
      countTries={countTries}
      expectedAnswer={expectedAnswer}
      attempts={attempts}
      setAttempts={setAttempts}
    />
  );

  fillWord("amount");
  keydownActiveInput("Enter");

  fillWord("haste");
  keydownActiveInput("Enter");

  fillWord("plate");
  keydownActiveInput("Enter");

  assertInputBoxRowActive(3, amount);

  for (let i = 4; i < countTries; i++) {
    assertInputBoxRowDisabled(i, amount);
  }

  fillWord("steak");
  keydownActiveInput("Enter");

  expect(setAttempts).toHaveBeenCalledWith([
    "amount",
    "haste",
    "plate",
    "steak",
  ]);
});

test("game ends when correct value is attempted", () => {
  const amount = 5;
  const countTries = 6;
  const expectedAnswer = "fight";
  const setAttempts = jest.fn();

  render(
    <Game
      amount={amount}
      countTries={countTries}
      expectedAnswer={expectedAnswer}
      attempts={[]}
      setAttempts={setAttempts}
    />
  );

  fillWord("fight");
  keydownActiveInput("Enter");

  for (let i = 1; i < countTries; i++) {
    assertInputBoxRowDisabled(i, amount);
  }
});
