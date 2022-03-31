import React from "react";
import { render, screen } from "@testing-library/react";

import Modal from "./Modal";

test("clicking close on the modal calls callback handleClose function", () => {
  const handleClose = jest.fn();
  const open = true;

  render(<Modal handleClose={handleClose} open={open} />);

  screen.getByText("Close").click();

  expect(handleClose).toHaveBeenCalled();
});
