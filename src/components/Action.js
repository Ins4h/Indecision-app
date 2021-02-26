import React from "react";

const Action = ({ handlePick, options }) => (
  <div>
    <button
      className="big-button"
      disabled={!options.length}
      onClick={handlePick}
    >
      What should I do
    </button>
  </div>
);

export default Action;
