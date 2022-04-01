import React from "react";
import { render, screen } from "@testing-library/react";
import { within } from "@testing-library/dom";

import InputBoxBoard from "./InputBoxBoard";
import {
  assertInputBox,
  assertInputBoxRowDisabled,
  assertInputBoxRowEqualStatus,
} from "../../../../Test/inputBox";
import { Status } from "../../Constants/status";

test("input box board loads correctly initially", async () => {
  const amount = 5;
  const countTries = 6;
  const statusAttempts = [Array(amount).fill(null)];

  render(
    <InputBoxBoard
      currentAttemptNumber={statusAttempts.length - 1}
      attempts={[]}
      statusAttempts={statusAttempts}
      amount={amount}
      countTries={countTries}
    />
  );

  const row = screen.getByTestId(`inputBoxRow-0`);

  expect(row).toBeInTheDocument();

  assertInputBoxRowEqualStatus(null, 0, amount);

  for (let i = 1; i < countTries; i++) {
    assertInputBoxRowEqualStatus(Status.DISABLED, i, amount);
  }
});

test("input box board loads correctly after 3 attempts", () => {
  const amount = 5;
  const countTries = 6;
  const statusAttempts = [
    ["wrong", "correct", "wrong", "wrong", "misplaced"],
    ["wrong", "wrong", "wrong", "correct", "wrong"],
    ["correct", "correct", "wrong", "misplaced", "wrong"],
    Array(amount).fill(null),
  ];

  render(
    <InputBoxBoard
      amount={amount}
      countTries={countTries}
      currentAttemptNumber={statusAttempts.length - 1}
      statusAttempts={statusAttempts}
      attempts={[]}
    />
  );

  for (let i = 0; i < statusAttempts.length; i++) {
    const row = screen.getByTestId(`inputBoxRow-${i}`);
    expect(row).toBeInTheDocument();

    for (let j = 0; j < amount; j++) {
      const inputElement = within(row).getByTestId(`input-${j}`);
      expect(inputElement).toBeInTheDocument();

      assertInputBox(statusAttempts[i][j], inputElement);
    }
  }

  for (let i = statusAttempts.length; i < countTries; i++) {
    assertInputBoxRowDisabled(i, amount);
  }
});
