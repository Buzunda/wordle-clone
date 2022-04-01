import React from "react";
import { render, screen } from "@testing-library/react";

import InputBox from "./InputBox";
import { asserElementWithClass } from "../../../../Test/helpers";

test("loads the inputBox correctly with the right status", () => {
  const status = "wrong";
  const value = "g";

  render(<InputBox status={status} value={value} />);

  const element = screen.getByText(value);

  asserElementWithClass(status, element, "inputBox");
});
