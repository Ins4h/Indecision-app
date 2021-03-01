import React, { useState, useEffect } from "react";
import AddOption from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";
import IndecisionContext from "./context/Indecision-context";

const IndecisionApp = () => {
  const optionsData = JSON.parse(localStorage.getItem("options"));
  const subtitle = "Let computer choose for you";

  const [options, setOptions] = useState(optionsData || []);
  const [selectedOption, setSelectedOption] = useState(undefined);

  useEffect(() => {
    localStorage.setItem("options", JSON.stringify(options));
  }, [options]);

  return (
    <IndecisionContext.Provider
      value={{ options, setOptions, selectedOption, setSelectedOption }}
    >
      <Header subtitle={subtitle} />
      <div className="container">
        <Action />
        <div className="widget">
          <Options />
          <AddOption />
        </div>
      </div>
      <OptionModal />
    </IndecisionContext.Provider>
  );
};

export default IndecisionApp;
