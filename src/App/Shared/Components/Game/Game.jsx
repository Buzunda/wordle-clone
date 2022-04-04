import React, { useEffect, useState } from "react";

import { getStatusAttempt } from "../../Services/StatusAttempts/statusAttempts";
import InputBoxBoard from "../InputBoxBoard/InputBoxBoard";
import { Status } from "../../Constants/status";
import styles from "./Game.module.scss";
import KeyWatcher from "../KeyWatcher/KeyWatcher";
import Keyboard from "../Keyboard/Keyboard";
import KeyPressedHandler from "../KeyPressedHandler/KeyPressedHandler";

const Game = ({
  expectedAnswer,
  amount,
  countTries,
  validInputRegExp,
  keyboardType,
}) => {
  const [attempts, setAttempts] = useState([""]);
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState(0);
  const [statusAttempts, setStatusAttempts] = useState([
    Array(amount).fill(null),
  ]);
  const [currentAttempt, setCurrentAttempt] = useState("");

  const [submitCount, setSubmitCount] = useState(1);

  const submit = () => {
    if (currentAttempt.length === amount) {
      evaluateAttempt();
      setCurrentAttemptNumber(currentAttemptNumber + 1);

      const tmpAttempts = [...attempts];
      tmpAttempts.push("");

      setAttempts(tmpAttempts);

      setCurrentAttempt("");
    } else {
      updateCurrentAttemptInvalid();
    }
    setSubmitCount(submitCount + 1);
  };

  const evaluateAttempt = () => {
    const attempt = getStatusAttempt(currentAttempt, expectedAnswer);

    updateStatusAttempts(attempt);
  };

  const updateStatusAttempts = (attempt) => {
    let tmpStatusAttempts = statusAttempts.slice();

    tmpStatusAttempts[tmpStatusAttempts.length - 1] = attempt;

    if (attempt.every((st) => st === Status.CORRECT)) {
      tmpStatusAttempts.push(Array(amount).fill(Status.DISABLED));
    } else {
      tmpStatusAttempts.push(Array(amount).fill(null));
    }

    setStatusAttempts(tmpStatusAttempts);
  };

  const updateCurrentAttemptInvalid = () => {
    let tmpStatusAttempts = statusAttempts.slice();

    tmpStatusAttempts[tmpStatusAttempts.length - 1] = Array(amount).fill(
      Status.INVALID
    );

    setStatusAttempts(tmpStatusAttempts);
  };

  useEffect(() => {
    const tmpAttempts = [...attempts];

    tmpAttempts[tmpAttempts.length - 1] = currentAttempt;

    setAttempts(tmpAttempts);
  }, [currentAttempt]);

  return (
    <div className={styles.game}>
      <div className={styles.board}>
        <InputBoxBoard
          amount={amount}
          countTries={countTries}
          currentAttemptNumber={currentAttemptNumber}
          attempts={attempts}
          statusAttempts={statusAttempts}
          currentAttempt={currentAttempt}
          submitCount={submitCount}
        />
      </div>
      <div className={styles.keyboard}>
        <Keyboard
          type={keyboardType}
          attempts={attempts}
          expectedAnswer={expectedAnswer}
        />
      </div>
      <KeyWatcher />
      <KeyPressedHandler
        validInputRegExp={validInputRegExp}
        currentAttempt={currentAttempt}
        amount={amount}
        onEnter={submit}
        onChange={setCurrentAttempt}
      />
    </div>
  );
};

export default Game;
