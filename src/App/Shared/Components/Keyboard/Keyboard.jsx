import React, { useEffect, useState } from "react";

import styles from "./Keyboard.module.scss";
import Key from "../Key/Key";
import { getStatusKeys } from "../../Services/StatusAttempts/statusAttempts";

const Keyboard = ({ type, attempts, expectedAnswer }) => {
  const [statusKeys, setStatusKeys] = useState({});

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

  const updateKeysStatus = () => {
    const something = getStatusKeys(attempts, expectedAnswer);

    setStatusKeys(something);
  };

  useEffect(() => {
    updateKeysStatus();
  }, [attempts]);

  return (
    <div className={styles.keyboard}>
      {type.map((row, index) => {
        return renderRow(row, index);
      })}
    </div>
  );
};

Keyboard.propTypes = {};

export default Keyboard;
