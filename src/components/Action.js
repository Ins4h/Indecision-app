import React, { useContext } from "react";
import IndecisionContext from "./context/Indecision-context";

const Action = () => {
  const { options, setSelectedOption } = useContext(IndecisionContext);

  const handlePick = () => {
    const random = Math.floor(Math.random() * options.length);
    const selectedOption = options[random];
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <button
        className="big-button"
        disabled={!options.length}
        onClick={handlePick}
      >
        What should I do
      </button>
    </div>
  );
};

export default Action;
