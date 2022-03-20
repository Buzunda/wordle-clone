import { fireEvent } from "@testing-library/react";

export const fillActiveInput = (value) => {
  fireEvent.change(document.activeElement, {
    target: { value: value },
  });
};

export const fillWord = (word) => {
  for (let i = 0; i < word.length; i++) {
    fillActiveInput(word[i]);
  }
};

export const keydownActiveInput = (key) => {
  fireEvent.keyDown(document.activeElement, {
    key: key,
    code: key,
  });
};
