import React from "react";

import styles from "./Keyboard.module.scss";
import Key from "../Key/Key";

const Keyboard = ({ rows, statusKeys }) => {
  const renderKey = (key) => {
    return (
      <div className={styles.key} key={key}>
        <Key status={statusKeys[key]}>{key}</Key>
      </div>
    );
  };

  const renderRow = (row, index) => {
    return (
      <div className={styles.keyboardRow} key={index}>
        {row.map((key) => {
          return renderKey(key);
        })}
      </div>
    );
  };

  return (
    <div className={styles.keyboard}>
      {rows.map((row, index) => {
        return renderRow(row, index);
      })}
    </div>
  );
};

Keyboard.propTypes = {};

export default Keyboard;
