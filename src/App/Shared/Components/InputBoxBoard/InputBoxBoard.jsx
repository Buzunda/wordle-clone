import React from "react";

import { Status } from "../../Constants/status";
import InputBoxRow from "../InputBoxRow/InputBoxRow";
import styles from "./InputBoxBoard.module.scss";

const InputBoxBoard = ({
  currentAttemptNumber,
  attempts,
  statusAttempts,
  amount,
  countTries,
  submitCount,
}) => {
  const statusArray = Array(amount).fill(null);

  const getKey = (i) => {
    if (i === currentAttemptNumber) {
      return `current-${i}-${submitCount}`;
    } else {
      return `other-${i}`;
    }
  };

  const renderInputBoxes = () => {
    let inputBoxesList = [];

    for (let i = 0; i < countTries; i++) {
      let statuses = statusArray.slice();
      if (i > currentAttemptNumber) {
        statuses = Array(amount).fill(Status.DISABLED);
      }
      if (i <= currentAttemptNumber) {
        statuses = statusAttempts[i];
      }
      inputBoxesList[i] = (
        <div key={getKey(i)} data-testid={`inputBoxRow-${i}`}>
          <InputBoxRow
            attempt={attempts[i]}
            amount={amount}
            statusArray={statuses}
          />
        </div>
      );
    }
    return inputBoxesList;
  };

  return <div className={styles.inputBoxBoard}>{renderInputBoxes()}</div>;
};

export default InputBoxBoard;
