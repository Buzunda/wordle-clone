import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import { asserElementWithClass } from "../../../../Test/Helpers";

test("renders the button with the correct status and calls the callback on click", () => {
  const onClick = jest.fn();
  const status = "correct";

  render(
    <Button status={status} onClick={onClick}>
      button label
    </Button>
  );

  const buttonElement = screen.getByText("button label");

  asserElementWithClass(status, buttonElement, "button");

  buttonElement.click();

  expect(onClick).toHaveBeenCalled();
});
