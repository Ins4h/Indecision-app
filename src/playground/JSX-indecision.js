const app = {
  title: "Indecision",
  subtitle: "Let this app choose for you",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderDOM();
  }
};

const removeAll = () => {
  app.options = [];
  renderDOM();
};

const makeDecision = () => {
  const randomNumber = Math.floor(Math.random() * app.options.length);
  alert(app.options[randomNumber]);
};
const appRoot = document.getElementById("app");

const renderDOM = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <h2>{app.subtitle}</h2>}
      {app.options && <p>You have {app.options.length} options!</p>}
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do
      </button>
      <ol>
        {app.options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>confirm</button>
      </form>
      <button onClick={removeAll}>remove ALL!</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderDOM();

//  babel src/app.js --out-file=public/scripts/app.js --presets=env,react -watch
