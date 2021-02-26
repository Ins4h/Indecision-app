import React from "react";
import AddOption from "./AddOptions";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length)
      localStorage.setItem("options", JSON.stringify(this.state.options));
  };

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleRemoveOption = (option) => {
    this.setState((prev) => {
      return {
        options: prev.options.filter((item) => item !== option),
      };
    });
  };

  handleSubmit = (option) => {
    if (!option) return "Enter valid value";
    else if (this.state.options.indexOf(option) > -1)
      return "this option already exist";
    this.setState((prev) => ({ options: [...prev.options, option] }));
  };

  handlePick = () => {
    const random = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[random];
    this.setState(() => ({ selectedOption }));
  };

  handleSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  render() {
    const subtitle = "Let computer choose for you";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action options={this.state.options} handlePick={this.handlePick} />
          <div className="widget">
            <Options
              handleRemoveOption={this.handleRemoveOption}
              handleDeleteOptions={this.handleDeleteOptions}
              options={this.state.options}
            />
            <AddOption handleSubmit={this.handleSubmit} />
          </div>
        </div>
        <OptionModal
          handleSelectedOption={this.handleSelectedOption}
          selectedOption={this.state.selectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
