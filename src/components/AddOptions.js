import React, { useContext, useState } from "react";
import IndecisionContext from "./context/Indecision-context";

const AddOption = () => {
  const { options, setOptions } = useContext(IndecisionContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (!option) return setError("Enter valid value");
    else if (options.indexOf(option) > -1)
      return setError("this option already exist");
    setOptions([...options, option]);
    e.target.elements.option.value = "";
    setError("");
  };

  return (
    <div>
      {error && <p className="add-option-error">{error}</p>}
      <form className="add-option" onSubmit={handleSubmit}>
        <input className="add-option__input" type="text" name="option" />
        <button className="button">Add Option</button>
      </form>
    </div>
  );
};

// class AddOption extends React.Component {
//   state = {
//     error: undefined,
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value.trim();
//     const error = this.props.handleSubmit(option);
//     this.setState(() => ({ error }));
//     if (!error) e.target.elements.option.value = "";
//   };

//   render() {
//     return (
//       <div>
//         {this.state.error && (
//           <p className="add-option-error">{this.state.error}</p>
//         )}
//         <form className="add-option" onSubmit={this.handleSubmit}>
//           <input className="add-option__input" type="text" name="option" />
//           <button className="button">Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }

export default AddOption;
