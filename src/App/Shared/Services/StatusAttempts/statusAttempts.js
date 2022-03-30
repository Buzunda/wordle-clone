import { Status } from "../../Constants/Status";

export const getStatusAttempt = (value, expectedAnswer) => {
  const attempt = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] === expectedAnswer[i]) {
      attempt[i] = Status.CORRECT;
    } else {
      if (expectedAnswer.indexOf(value[i]) !== -1) {
        attempt[i] = Status.MISPLACED;
      } else {
        attempt[i] = Status.WRONG;
      }
    }
  }

  return attempt;
};

export const getStatusKeys = (statusAttempts, expectedAnswer) => {
  const mapKeys = {};

  statusAttempts.forEach((attempt) => {
    for (let i = 0; i < attempt.length; i++) {
      const char = attempt[i];
      if (char === expectedAnswer[i]) {
        mapKeys[char] = Status.CORRECT;
      } else {
        if (
          expectedAnswer.indexOf(char) !== -1 &&
          mapKeys[char] !== Status.CORRECT
        ) {
          mapKeys[char] = Status.MISPLACED;
        } else if (
          mapKeys[char] !== Status.MISPLACED &&
          mapKeys[char] !== Status.CORRECT
        ) {
          mapKeys[char] = Status.WRONG;
        }
      }
    }
  });

  return mapKeys;
};
