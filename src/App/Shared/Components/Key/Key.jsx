import React from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";

import styles from "./Key.module.scss";
import { setKeyPressed } from "../../../Store/keyPressedSlice";

const cx = classNames.bind(styles);

const Key = ({ children, status }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setKeyPressed(children));
  };

  return (
    <button onClick={handleClick} className={cx(status, "key")}>
      {children}
    </button>
  );
};

Key.propTypes = {};

export default Key;
