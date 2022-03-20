import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import getGiven from "givens";

import InputBoxes from "./InputBoxes";
import {
  fillActiveInput,
  fillWord,
  keydownActiveInput,
} from "../../../Test/Helpers";

describe("InputBoxes", () => {
  const given = getGiven();

  given("amount", () => 5);
  const handleOutputString = jest.fn();

  const fillInput = (testId, value) => {
    fireEvent.change(screen.getByTestId(testId), {
      target: { value: value },
    });
  };

  beforeEach(() => {
    render(
      <InputBoxes
        handleOutputString={handleOutputString}
        amount={given.amount}
      />
    );
  });

  it("generates the amount of input boxes passed on prop", () => {
    expect(screen.getAllByRole("textbox")).toHaveLength(given.amount);
  });

  describe("navigation", () => {
    it("first element is focused", () => {
      expect(
        document.activeElement === screen.getByTestId("input-0")
      ).toBeTruthy();
    });
    it("right arrow key moves the focus right", () => {
      keydownActiveInput("ArrowRight");
      expect(
        document.activeElement === screen.getByTestId("input-1")
      ).toBeTruthy();
    });

    it("left arrow key moves the focus left", () => {
      screen.getByTestId("input-1").focus();

      keydownActiveInput("ArrowLeft");
      expect(
        document.activeElement === screen.getByTestId("input-0")
      ).toBeTruthy();
    });

    describe("input", () => {
      it("filling a value moves the focus right", () => {
        fillActiveInput("a");
        expect(
          document.activeElement === screen.getByTestId("input-1")
        ).toBeTruthy();
      });

      it("filling a value keeps the focus if element is the last", () => {
        screen.getByTestId(`input-${given.amount - 1}`).focus();
        fillActiveInput("a");
        expect(
          document.activeElement ===
            screen.getByTestId(`input-${given.amount - 1}`)
        ).toBeTruthy();
      });
    });

    describe("backspace", () => {
      it("moves the focus left if current input is empty", () => {
        screen.getByTestId("input-1").focus();
        keydownActiveInput("Backspace");
        expect(
          document.activeElement === screen.getByTestId("input-0")
        ).toBeTruthy();
      });

      it("keeps the focus on input if current input has value", () => {
        fillInput("input-1", "a");
        screen.getByTestId("input-1").focus();
        keydownActiveInput("Backspace");
        expect(
          document.activeElement === screen.getByTestId("input-1")
        ).toBeTruthy();
      });
    });
  });

  describe("filling the inputs", () => {
    it("calls handleOutputString with the word informed", () => {
      const word = "among";
      fillWord(word);
      expect(handleOutputString).toHaveBeenCalledWith("among");
    });

    it("calls handleOutputString with the word informed after updating it", () => {
      const word = "grade";

      fillWord(word);

      keydownActiveInput("Backspace");
      keydownActiveInput("Backspace");

      fillWord("ss");

      expect(handleOutputString).toHaveBeenCalledWith("grass");
    });
  });
});
