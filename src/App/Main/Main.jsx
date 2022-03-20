import InputBoxes from "../Shared/Components/InputBoxes/InputBoxes";
import React, { useState } from "react";

const Main = ({}) => {
  const [value, setValue] = useState("");
  const amount = 5;
  const statusArray = Array(amount).fill(null);

  return (
    <div>
      filled word <span>{value}</span>
      <InputBoxes
        handleOutputString={setValue}
        amount={amount}
        statusArray={statusArray}
      />
    </div>
  );
};

export default Main;
