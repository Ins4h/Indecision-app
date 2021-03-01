import React, { useContext } from "react";
import Modal from "react-modal";
import IndecisionContext from "./context/Indecision-context";

const OptionModal = () => {
  const { selectedOption, setSelectedOption } = useContext(IndecisionContext);

  const handleSelectedOption = () => {
    setSelectedOption(undefined);
  };

  return (
    <Modal
      isOpen={!!selectedOption}
      contentLabel="Selected Opton"
      onRequestClose={handleSelectedOption}
      ariaHideApp={false}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected option</h3>
      {selectedOption && <p className="modal__body">{selectedOption}</p>}
      <button className="button" onClick={handleSelectedOption}>
        Okay!
      </button>
    </Modal>
  );
};

export default OptionModal;
