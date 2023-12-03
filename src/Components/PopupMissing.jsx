import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const PopupMissing = ({ handleNo, handleYes, setPopup, missingData }) => {
  return (
    <div className="missing-popup">
      <div className="missing-title">
        <p>Missing product</p>
        <FontAwesomeIcon
          className="icon"
          icon={faX}
          onClick={() => {
            setPopup(false);
          }}
        />
      </div>
      <p>Is {missingData && missingData[0].productName} urgent?</p>
      <div className="missing-btn-container">
        <button onClick={handleNo}>No</button>
        <button onClick={handleYes}>Yes</button>
      </div>
    </div>
  );
};

export default PopupMissing;
