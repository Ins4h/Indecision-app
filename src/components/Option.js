import React from "react";

const Option = ({ name, handleRemoveOption, count }) => (
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

export default Option;
