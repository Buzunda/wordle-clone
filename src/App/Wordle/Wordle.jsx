import React, { useEffect, useState } from "react";

import Game from "../Shared/Components/Game/Game";
import { getStatusKeys } from "../Shared/Services/StatusAttempts/statusAttempts";
import QWERTYKeyboard from "../Shared/Components/QWERTYKeyboard/QWERTYKeyboard";
import Keyboard from "../Shared/Components/Keyboard/Keyboard";
import styles from "./Wordle.module.scss";

const Wordle = ({}) => {
  const [attempts, setAttempts] = useState([]);
  const [statusKeys, setStatusKeys] = useState({});

  const amount = 5;
  const countTries = 6;
  const expectedAnswer = "vasco";

  const updateKeysStatus = () => {
    const something = getStatusKeys(attempts, expectedAnswer);

    setStatusKeys(something);
  };

  const renderKeyboard = () => {
    return (
      <QWERTYKeyboard>
        <Keyboard statusKeys={statusKeys} />
      </QWERTYKeyboard>
    );
  };

  useEffect(() => {
    updateKeysStatus();
  }, [attempts]);

  return (
    <div className={styles.wordle}>
      <h1>Wordle</h1>
      <Game
        amount={amount}
        countTries={countTries}
        expectedAnswer={expectedAnswer}
        attempts={attempts}
        setAttempts={setAttempts}
        keyboard={renderKeyboard()}
      />
    </div>
  );
};

export default Wordle;
