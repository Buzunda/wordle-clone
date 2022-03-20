import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import InputBox from "../InputBox/InputBox";

const InputBoxes = ({ amount, statusArray, handleOutputString }) => {
  const [word, setWord] = useState(Array(amount).fill(null));

  const inputRegExp = /^[a-zA-Z]$/;

  const inputElements = [];

  useEffect(() => {
    inputElements["input-0"].focus();
  }, []);

  useEffect(() => {
    handleOutputString(word.join(""));
  }, [word]);

  const focusPreviousInput = (target) => {
    if (target.previousElementSibling !== null) {
      target.previousElementSibling.focus();
    }
  };

  const focusNextInput = (target) => {
    if (target.nextElementSibling !== null) {
      target.nextElementSibling.focus();
    }
  };

  const setValue = () => {
    let updatedCharacters = word.map((character, number) => {
      return inputElements["input-" + number].value;
    });

    setWord(updatedCharacters);
  };

  const handleChange = ({ target }) => {
    if (target.value.match(inputRegExp)) {
      focusNextInput(target);
      setValue(target);
    } else {
      target.value = word[target.name.replace("input-", "")];
    }
  };

  const handleKeyDown = ({ target, key }) => {
    if (key === "Backspace") {
      if (target.value === "" && target.previousElementSibling !== null) {
        target.previousElementSibling.value = "";
        focusPreviousInput(target);
      } else {
        target.value = "";
      }
      setValue(target);
    } else if (key === "ArrowLeft") {
      focusPreviousInput(target);
    } else if (key === "ArrowRight" || key === " ") {
      focusNextInput(target);
    }
  };

  const renderItems = () => {
    let items = [];

    for (let i = 0; i < amount; i++) {
      items.push(
        <InputBox
          key={i}
          status={statusArray[i]}
          handleKeyDown={handleKeyDown}
          handleChange={handleChange}
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

  return <div>{renderItems()}</div>;
};

InputBoxes.propTypes = {
  amount: PropTypes.number,
  statusArray: PropTypes.arrayOf(PropTypes.string),
  handleOutputString: PropTypes.func.isRequired,
};

export default InputBoxes;
