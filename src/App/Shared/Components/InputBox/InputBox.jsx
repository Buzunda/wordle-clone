import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputBox.module.scss";

const cx = classNames.bind(styles);

const InputBox = ({ status, value, name }) => {
  return (
    <div className={cx("inputBox", status)} data-testid={name}>
      {value}
    </div>
  );
};

InputBox.propTypes = {
  status: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default InputBox;
