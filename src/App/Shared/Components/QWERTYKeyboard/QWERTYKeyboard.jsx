import React, { cloneElement } from "react";

const QWERTYKeyboard = ({ children }) => {
  const rows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["z", "x", "c", "v", "b", "n", "m"],
  ];

  let qwertyKeyboard = cloneElement(children, {
    rows,
  });

  return <div>{qwertyKeyboard}</div>;
};

QWERTYKeyboard.propTypes = {};

export default QWERTYKeyboard;
