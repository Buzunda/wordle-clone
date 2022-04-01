import React from "react";
import { render, screen } from "@testing-library/react";

import InputBoxRow from "./InputBoxRow";
import { Status } from "../../Constants/Status";
import { asserElementWithClass } from "../../../../Test/helpers";

test("loads the inputBox correctly with the right status", () => {
  const amount = 5;
  const attempt = "fight";
  let statusArray = Array(5).fill(null);

  const { rerender } = render(
    <InputBoxRow amount={amount} attempt={attempt} statusArray={statusArray} />
  );

  statusArray.forEach((status, index) => {
    asserElementWithClass(null, screen.getByText(attempt[index]), "inputBox");
  });

  statusArray = [
    Status.WRONG,
    Status.CORRECT,
    Status.MISPLACED,
    Status.CORRECT,
    Status.WRONG,
  ];

  rerender(
    <InputBoxRow amount={amount} attempt={attempt} statusArray={statusArray} />
  );

  statusArray.forEach((status, index) => {
    asserElementWithClass(status, screen.getByText(attempt[index]), "inputBox");
  });
});
