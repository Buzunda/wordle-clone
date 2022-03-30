import React from "react";
import { render, screen } from "@testing-library/react";
import getGiven from "givens";

import Key from "./Key";

describe("Key", () => {
  const given = getGiven();

  beforeEach(() => {
    render(<Key status={given.status}>z</Key>);
  });

  ["correct", "wrong", "misplaced"].forEach((status) => {
    describe(`for status ${status}`, () => {
      given("status", () => status);

      it(`adds ${status} class`, () => {
        expect(screen.getByText("z")).toHaveClass(status);
      });
    });
  });

  describe("when there is no status", () => {
    given("status", () => null);

    it("does not add any extra class", () => {
      const element = screen.getByText("z");
      expect(element).toHaveClass("key");
      expect(element.classList).toHaveLength(1);
    });
  });
});
