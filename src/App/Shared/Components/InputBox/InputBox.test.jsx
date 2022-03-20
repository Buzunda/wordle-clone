import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import getGiven from "givens";

import InputBox from "./InputBox";

describe("InputBox", () => {
  const given = getGiven();
  const handleKeyDown = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    render(
      <InputBox
        type={"text"}
        status={given.status}
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

  ["correct", "wrong", "misplaced"].forEach((status) => {
    describe(`for status ${status}`, () => {
      given("status", () => status);

      it(`adds ${status} class`, () => {
        expect(screen.getByTestId("input-test")).toHaveClass(status);
      });
    });
  });

  describe("when there is no status", () => {
    given("status", () => null);

    it("does not add any extra class", () => {
      const element = screen.getByTestId("input-test");
      expect(element).toHaveClass("inputBox");
      expect(element.classList).toHaveLength(1);
    });
  });
});
