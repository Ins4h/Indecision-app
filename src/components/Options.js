import React, { useContext } from "react";
import IndecisionContext from "./context/Indecision-context";
import Option from "./Option";

const Options = () => {
  const { options, setOptions } = useContext(IndecisionContext);

  const handleDeleteOptions = () => {
    setOptions([]);
  };

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="button button--link" onClick={handleDeleteOptions}>
          Remove All
        </button>
      </div>
      {options.length === 0 && (
        <p className="widget__message">Please add an option to get started</p>
      )}
      <div>
        {options.map((option) => (
          <Option key={option} name={option} />
        ))}
      </div>
    </div>
  );
};

export default Options;
