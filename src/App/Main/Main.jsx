import InputBoxes from "../Shared/Components/InputBoxes/InputBoxes";
import React, { useState } from "react";

const Main = ({}) => {
  const [value, setValue] = useState("");

  return (
    <div>
      filled word <span>{value}</span>
      <InputBoxes handleOutputString={setValue} amount={5} />
    </div>
  );
};

export default Main;
