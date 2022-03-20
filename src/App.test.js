import { render, screen } from "@testing-library/react";
import App from "./App";
import { fillWord } from "./Test/Helpers";
import React from "react";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the filled word", () => {
    fillWord("super");

    expect(screen.queryByText("super")).toBeInTheDocument();
  });
});
