import React from "react";
import Modal from "react-modal";

const OptionModal = ({ selectedOption, handleSelectedOption }) => (
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

export default OptionModal;
