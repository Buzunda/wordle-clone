import React from "react";
import classNames from "classnames/bind";

import styles from "./Key.module.scss";

const cx = classNames.bind(styles);

const Key = ({ children, status, keyProps }) => {
  return (
    <>
      <button {...keyProps} className={cx(status, "key")}>
        {children}
      </button>
    </>
  );
};

Key.propTypes = {};

export default Key;
