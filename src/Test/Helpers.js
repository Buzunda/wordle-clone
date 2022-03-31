import { fireEvent } from "@testing-library/react";

export const fillActiveInput = (value) => {
  fireEvent.change(document.activeElement, {
    target: { value: value },
  });
};

export const fillWord = (word) => {
  for (let i = 0; i < word.length; i++) {
    keydownActiveInput(word[i]);
  }
};

export const keydownActiveInput = (key) => {
  fireEvent.keyDown(document.activeElement, {
    key: key,
  });
};

export const asserElementWithClass = (status, element, elementCLass) => {
  if (status) {
    expect(element).toHaveClass(status);
  } else {
    expect(element).toHaveClass(elementCLass);
    expect(element.classList).toHaveLength(1);
  }
};
