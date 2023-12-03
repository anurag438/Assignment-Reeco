import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const OrderMainDetails = () => {
  return (
    <div className="ordermaindetails-container">
      <p className="order-id">
        Orders <FontAwesomeIcon className="icon" icon={faCaretRight} />{" "}
        <a href="#">Order 32457</a>
      </p>
      <div className="ordermain-sub">
        <p>Order 32457BC</p>
        <div className="ordermain-btn-container">
          <button className="btnBack">Back</button>
          <button className="btnApprove">Approve order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderMainDetails;
