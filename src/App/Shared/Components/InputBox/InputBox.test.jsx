import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import InputBox from "./InputBox";

describe("InputBox", () => {
  const handleKeyDown = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    render(
      <InputBox
        type={"text"}
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
        name={"input-test"}
      />
    );
  });
  describe("on keydown", () => {
    it("calls handleKeyDown callback", () => {
      fireEvent.keyDown(screen.getByTestId("input-test"), {
        key: "A",
        code: "KeyA",
      });
      expect(handleKeyDown).toHaveBeenCalled();
    });
  });

  describe("on change", () => {
    it("calls handleChange callback", () => {
      fireEvent.change(screen.getByTestId("input-test"), {
        target: { value: "A" },
      });
      expect(handleChange).toHaveBeenCalled();
    });
  });
});
