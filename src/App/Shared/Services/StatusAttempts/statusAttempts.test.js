import React from "react";

import { getStatusKeys, getStatusAttempt } from "./statusAttempts";

describe("statusAttempt", () => {
  const expectedAnswer = "draft";

  describe(`getStatusKeys for ${expectedAnswer}`, () => {
    const testAttempts = [
      {
        attempts: ["crowd"],
        expectedResult: {
          c: "wrong",
          d: "misplaced",
          o: "wrong",
          r: "correct",
          w: "wrong",
        },
      },
      {
        attempts: ["crowd", "knife"],
        expectedResult: {
          c: "wrong",
          d: "misplaced",
          e: "wrong",
          f: "correct",
          i: "wrong",
          k: "wrong",
          n: "wrong",
          o: "wrong",
          r: "correct",
          w: "wrong",
        },
      },
      {
        attempts: ["crowd", "knife", "dream"],
        expectedResult: {
          a: "misplaced",
          c: "wrong",
          d: "correct",
          e: "wrong",
          f: "correct",
          i: "wrong",
          k: "wrong",
          m: "wrong",
          n: "wrong",
          o: "wrong",
          r: "correct",
          w: "wrong",
        },
      },

      {
        attempts: ["crowd", "knife", "dream", "track"],
        expectedResult: {
          a: "correct",
          c: "wrong",
          d: "correct",
          e: "wrong",
          f: "correct",
          i: "wrong",
          k: "wrong",
          m: "wrong",
          n: "wrong",
          o: "wrong",
          r: "correct",
          t: "misplaced",
          w: "wrong",
        },
      },
      {
        attempts: ["crowd", "knife", "dream", "track", "draft"],
        expectedResult: {
          a: "correct",
          c: "wrong",
          d: "correct",
          e: "wrong",
          f: "correct",
          i: "wrong",
          k: "wrong",
          m: "wrong",
          n: "wrong",
          o: "wrong",
          r: "correct",
          t: "correct",
          w: "wrong",
        },
      },
    ];

    testAttempts.forEach((testAttempt) => {
      it(`returns the correct key map for ${testAttempt.attempts}`, () => {
        expect(getStatusKeys(testAttempt.attempts, expectedAnswer)).toEqual(
          testAttempt.expectedResult
        );
      });
    });
  });

  describe(`getStatusAttempt for ${expectedAnswer}`, () => {
    const testAttempts = [
      {
        attempt: "crowd",
        expectedResult: ["wrong", "correct", "wrong", "wrong", "misplaced"],
      },
      {
        attempt: "knife",
        expectedResult: ["wrong", "wrong", "wrong", "correct", "wrong"],
      },
      {
        attempt: "dream",
        expectedResult: ["correct", "correct", "wrong", "misplaced", "wrong"],
      },
      {
        attempt: "track",
        expectedResult: ["misplaced", "correct", "correct", "wrong", "wrong"],
      },
      {
        attempt: "draft",
        expectedResult: ["correct", "correct", "correct", "correct", "correct"],
      },
    ];

    testAttempts.forEach((testAttempt) => {
      it(`returns the correct status array for ${testAttempt.attempt}`, () => {
        expect(getStatusAttempt(testAttempt.attempt, expectedAnswer)).toEqual(
          testAttempt.expectedResult
        );
      });
    });
  });
});
