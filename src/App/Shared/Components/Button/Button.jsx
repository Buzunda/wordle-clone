import React from "react";
import classNames from "classnames/bind";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ children, status, onClick }) => {
  return (
    <button className={cx(status, "button")} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {};

export default Button;
