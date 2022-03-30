import React, { useEffect, useState } from "react";

import { getStatusAttempt } from "../../Services/StatusAttempts/statusAttempts";
import InputBoxBoard from "../InputBoxBoard/InputBoxBoard";
import { Status } from "../../Constants/Status";
import styles from "./Game.module.scss";

const Game = ({
  expectedAnswer,
  attempts,
  setAttempts,
  amount,
  countTries,
  keyboard,
}) => {
  const [value, setValue] = useState("");
  const [currentAttemptNumber, setCurrentAttemptNumber] = useState(0);
  const [statusAttempts, setStatusAttempts] = useState([
    Array(amount).fill(null),
  ]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [value]);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      submit();
    }
  };

  const submit = () => {
    if (value.length === amount) {
      evaluateAttempt();
      setCurrentAttemptNumber(currentAttemptNumber + 1);

      const tmpAttempts = [...attempts];
      tmpAttempts.push(value);
      setAttempts(tmpAttempts);
    }
  };

  const evaluateAttempt = () => {
    const attempt = getStatusAttempt(value, expectedAnswer);

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

  return (
    <div className={styles.game}>
      <div className={styles.board}>
        <InputBoxBoard
          amount={amount}
          countTries={countTries}
          currentAttemptNumber={currentAttemptNumber}
          statusAttempts={statusAttempts}
          setValue={setValue}
        />
      </div>
      <div className={styles.keyboard}>{keyboard}</div>
    </div>
  );
};

export default Game;
