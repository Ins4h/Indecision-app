class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prev) => {
      return {
        flag: !prev.flag,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility-toggle</h1>
        <button onClick={this.handleToggle}>
          {this.state.flag ? "hide message" : "show message"}
        </button>
        {this.state.flag && <p>Secret message</p>}
      </div>
    );
  }
}

const appRoot = document.getElementById("app");
ReactDOM.render(<Visibility />, appRoot);

// let flag = false;
// const onToggle = () => {
//   flag = !flag;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Toggle Visibility</h1>
//       <button onClick={onToggle}>
//         {flag ? "hide details" : "show details"}
//       </button>
//       {flag && <p>secret message</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render()
