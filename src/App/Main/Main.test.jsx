import React from "react";
import { render, screen } from "@testing-library/react";

import Main from "./Main";
import { fillWord } from "../../Test/Helpers";

describe("Main", () => {
  beforeEach(() => {
    render(<Main />);
  });

  it("renders the filled word", () => {
    fillWord("super");

    expect(screen.queryByText("super")).toBeInTheDocument();
  });
});
