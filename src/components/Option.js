import React, { useContext } from "react";
import IndecisionContext from "./context/Indecision-context";

const Option = ({ name }) => {
  const { options, setOptions } = useContext(IndecisionContext);
  const count = options.findIndex((option) => option === name) + 1;
  const handleRemoveOption = (name) => {
    setOptions(options.filter((option) => name !== option));
  };

  return (
    <div className="option">
      <p className="option__text">
        {count}. {name}
      </p>
      <button
        className="button button--link"
        onClick={(e) => handleRemoveOption(name)}
      >
        remove
      </button>
    </div>
  );
};

export default Option;
