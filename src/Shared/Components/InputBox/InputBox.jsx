import React from "react";
import PropTypes from "prop-types";

import styles from "./InputBox.module.scss";

const InputBox = ({
  name,
  inputRef,
  inputProps,
  handleKeyDown,
  handleChange,
}) => {
  return (
    <input
      {...inputProps}
      className={styles.inputBox}
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
  inputRef: PropTypes.func,
  inputProps: PropTypes.object,
  handleKeyDown: PropTypes.func,
  handleChange: PropTypes.func,
};

export default InputBox;
