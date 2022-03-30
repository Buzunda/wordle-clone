import React from "react";
import { render, screen } from "@testing-library/react";

import Keyboard from "../Keyboard/Keyboard";
import { assertKeyWithClass } from "../../../../Test/key";
import QWERTYKeyboard from "./QWERTYKeyboard";

test("QWERTYKeyboard loads a keyboard with the QWERTY layout", () => {
  const statusKeys = {
    a: "misplaced",
    c: "wrong",
    d: "misplaced",
    g: "correct",
    l: "wrong",
    m: "correct",
  };

  const CHAR_CODE_A = 97;
  const CHAR_CODE_Z = 122;

  render(
    <QWERTYKeyboard>
      <Keyboard statusKeys={statusKeys} />
    </QWERTYKeyboard>
  );

  for (let i = CHAR_CODE_A; i <= CHAR_CODE_Z; i++) {
    const char = String.fromCharCode(i);
    assertKeyWithClass(statusKeys[char], screen.getByText(char));
  }
});
