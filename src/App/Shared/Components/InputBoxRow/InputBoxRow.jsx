import React from "react";
import PropTypes from "prop-types";

import InputBox from "../InputBox/InputBox";
import styles from "./InputBoxRow.module.scss";

const InputBoxRow = ({ amount, attempt, statusArray }) => {
  const inputElements = [];

  const renderItems = () => {
    let items = [];

    for (let i = 0; i < amount; i++) {
      items.push(
        <InputBox
          key={i}
          value={attempt ? attempt[i] : null}
          status={statusArray[i]}
          inputRef={(el) => {
            if (!el) return;
            inputElements[el.name] = el;
          }}
          name={"input-" + i}
        />
      );
    }

    return items;
  };

  return <div className={styles.inputBoxRow}>{renderItems()}</div>;
};

InputBoxRow.propTypes = {
  amount: PropTypes.number,
  attempt: PropTypes.string,
  statusArray: PropTypes.arrayOf(PropTypes.string),
};

export default InputBoxRow;
