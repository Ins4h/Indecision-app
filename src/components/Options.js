import React from "react";
import Option from "./Option";

const Options = ({ handleDeleteOptions, options, handleRemoveOption }) => (
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
      {options.map((option, index) => (
        <Option
          handleRemoveOption={handleRemoveOption}
          count={index + 1}
          key={option}
          name={option}
        />
      ))}
    </div>
  </div>
);

export default Options;
