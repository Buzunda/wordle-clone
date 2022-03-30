import React from "react";

import { Status } from "../../Constants/Status";
import InputBoxRow from "../InputBoxRow/InputBoxRow";
import styles from "./InputBoxBoard.module.scss";

const InputBoxBoard = ({
  currentAttemptNumber,
  statusAttempts,
  amount,
  countTries,
  setValue,
}) => {
  const statusArray = Array(amount).fill(null);

  const renderInputBoxes = () => {
    let inputBoxesList = [];

    for (let i = 0; i < countTries; i++) {
      let statuses = statusArray.slice();
      if (i > currentAttemptNumber) {
        statuses = Array(amount).fill(Status.DISABLED);
      }
      if (i <= currentAttemptNumber && currentAttemptNumber > 0) {
        statuses = statusAttempts[i];
      }
      inputBoxesList[i] = (
        <InputBoxRow
          handleOutputString={setValue}
          amount={amount}
          statusArray={statuses}
          key={i}
          data-testid={`inputBoxRow-${i}`}
        />
      );
    }
    return inputBoxesList;
  };

  return <div className={styles.inputBoxBoard}>{renderInputBoxes()}</div>;
};

export default InputBoxBoard;
