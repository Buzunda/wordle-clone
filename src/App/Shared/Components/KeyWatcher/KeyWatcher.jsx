import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setKeyPressed } from "../../../Store/keyPressedSlice";

const KeyWatcher = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (event) => {
    dispatch(setKeyPressed(event.key));
  };

  return null;
};

export default KeyWatcher;
