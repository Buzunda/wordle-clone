import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetKeyPressed } from "../../../Store/keyPressedSlice";

const KeyPressedHandler = ({
  validInputRegExp,
  currentAttempt,
  amount,
  onEnter,
  onChange,
}) => {
  const keyPressed = useSelector((state) => state.keyPressed);
  const dispatch = useDispatch();

  const handleKeyPressed = (key) => {
    if (key.match(validInputRegExp) && currentAttempt.length < amount) {
      onChange(currentAttempt + key);
    }
  };

  useEffect(() => {
    if (keyPressed.value) {
      if (keyPressed.value === "Enter") {
        onEnter();
      } else if (keyPressed.value === "Backspace") {
        onChange(currentAttempt.slice(0, -1));
      } else {
        handleKeyPressed(keyPressed.value);
      }
      dispatch(resetKeyPressed());
    }
  }, [keyPressed]);

  return null;
};

export default KeyPressedHandler;
