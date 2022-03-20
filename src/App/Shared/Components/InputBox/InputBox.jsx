import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";

import styles from "./InputBox.module.scss";

const cx = classNames.bind(styles);

const InputBox = ({
  name,
  status,
  inputRef,
  inputProps,
  handleKeyDown,
  handleChange,
}) => {
  return (
    <input
      {...inputProps}
      className={cx("inputBox", status)}
      type="text"
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      maxLength="1"
      name={name}
      ref={inputRef}
      data-testid={name}
    />
  );
};

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  inputRef: PropTypes.func,
  inputProps: PropTypes.object,
  handleKeyDown: PropTypes.func,
  handleChange: PropTypes.func,
};

export default InputBox;
