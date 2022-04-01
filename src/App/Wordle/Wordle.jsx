import Game from "../Shared/Components/Game/Game";
import styles from "./Wordle.module.scss";
import { KeyboardTypes } from "../Shared/Constants/keyboardTypes";

const Wordle = ({}) => {
  const validInputRegExp = /^[a-zA-Z]$/;

  const amount = 5;
  const countTries = 6;
  const expectedAnswer = "vasco";

  return (
    <div className={styles.wordle}>
      <h1>Wordle</h1>
      <Game
        amount={amount}
        countTries={countTries}
        expectedAnswer={expectedAnswer}
        validInputRegExp={validInputRegExp}
        keyboardType={KeyboardTypes.QWERTY}
      />
    </div>
  );
};

export default Wordle;
