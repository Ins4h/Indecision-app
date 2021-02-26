class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
    };
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length)
      localStorage.setItem("options", JSON.stringify(this.state.options));
  }

  componentDidMount() {
    try {
      const options = JSON.parse(localStorage.getItem("options"));
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {}
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleRemoveOption(option) {
    this.setState((prev) => {
      return {
        options: prev.options.filter((item) => item !== option),
      };
    });
  }

  handleSubmit(option) {
    if (!option) return "Enter valid value";
    else if (this.state.options.indexOf(option) > -1)
      return "this option already exist";
    this.setState((prev) => ({ options: [...prev.options, option] }));
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }

  render() {
    const title = "Indecision";
    const subtitle = "Let computer choose for you";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action options={this.state.options} handlePick={this.handlePick} />
        <Options
          handleRemoveOption={this.handleRemoveOption}
          handleDeleteOptions={this.handleDeleteOptions}
          options={this.state.options}
        />
        <AddOption handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

const Header = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <h2>{subtitle}</h2>}
  </div>
);

Header.defaultProps = {
  title: "Indecision",
};

const Action = ({ handlePick, options }) => (
  <div>
    <button disabled={!options.length} onClick={handlePick}>
      Choose
    </button>
  </div>
);

const Options = ({ handleDeleteOptions, options, handleRemoveOption }) => (
  <div>
    <button onClick={handleDeleteOptions}>Remove All</button>
    {options.length === 0 && <p>Please add an option to get started</p>}
    <p>You have: {options.length} options</p>
    <ol>
      {options.map((option) => (
        <Option
          handleRemoveOption={handleRemoveOption}
          key={option}
          name={option}
        />
      ))}
    </ol>
  </div>
);

const Option = ({ name, handleRemoveOption }) => (
  <div>
    <li>{name}</li>
    <button onClick={(e) => handleRemoveOption(name)}>remove</button>
  </div>
);

class AddOption extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      error: undefined,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleSubmit(option);
    this.setState(() => ({ error }));
    if (!error) e.target.elements.option.value = "";
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="option" />
          <button>confirm</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
