import { screen } from "@testing-library/react";
import { within } from "@testing-library/dom";
import { Status } from "../App/Shared/Constants/status";

const assertInputBoxWithClass = (status, inputElement) => {
  expect(inputElement).toHaveClass(status);
};

const assertInputBoxForInput = (status, inputElement) => {
  expect(inputElement).toHaveClass("inputBox");
  expect(inputElement.classList).toHaveLength(1);
};

export const assertInputBox = (status, inputElement) => {
  if (status) {
    assertInputBoxWithClass(status, inputElement);
  } else {
    assertInputBoxForInput(status, inputElement);
  }
};

export const assertInputBoxRowEqualStatus = (status, rowIndex, amount) => {
  const row = screen.getByTestId(`inputBoxRow-${rowIndex}`);
  expect(row).toBeInTheDocument();

  for (let j = 0; j < amount; j++) {
    const inputElement = within(row).getByTestId(`input-${j}`);
    expect(inputElement).toBeInTheDocument();

    assertInputBox(status, inputElement);
  }
};

export const assertInputBoxRowDisabled = (rowIndex, amount) => {
  assertInputBoxRowEqualStatus(Status.DISABLED, rowIndex, amount);
};

export const assertInputBoxRowActive = (rowIndex, amount) => {
  assertInputBoxRowEqualStatus(null, rowIndex, amount);
};
