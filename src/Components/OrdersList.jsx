import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";
import PopupMissing from "./PopupMissing";
import { useSelector, useDispatch } from "react-redux";
import { available, missing, missingUrgent } from "../redux/actions";
import EditModule from "./EditModule";
import avacad from "./avacad.jpg";
import { type } from "@testing-library/user-event/dist/type";
const OrdersList = () => {
  const [popup, setPopup] = useState(false);
  const [editModule, setEditModule] = useState(false);
  const [id, setId] = useState(null);
  const [missingData, setMissingData] = useState(null);
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.data);
  const handleTick = (id) => {
    dispatch(available(id));
  };
  const handleX = (id) => {
    setPopup(true);
    setId(id);
    setMissingData(orders.filter((item) => item.id === id));
  };
  const handleNo = () => {
    dispatch(missing(id));
    setPopup(false);
  };
  const handleYes = () => {
    dispatch(missingUrgent(id));
    setPopup(false);
  };
  const handleEdit = (id) => {
    setEditModule(true);
    setMissingData(orders.filter((item) => item.id === id));
  };
  const handleCancel = () => {
    setEditModule(false);
  };
  const handleSend = () => {
    setEditModule(false);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img className="avacad-image" src={avacad} alt="image" />
                </td>
                <td>{item.productName}</td>
                <td>{item.brand}</td>
                <td>${item.price}/6*1LB</td>
                <td>{item.quantity}x6*1LB</td>
                <td>${item.total}</td>
                <td>
                  {typeof item.status === "string"
                    ? item.status
                    : item.status.map((item) => `${item} `)}
                </td>
                <td className="cta-btn-container">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faCheck}
                    onClick={() => handleTick(item.id)}
                  />
                  <FontAwesomeIcon
                    className="icon"
                    icon={faX}
                    onClick={() => handleX(item.id)}
                  />
                  <p className="edit" onClick={() => handleEdit(item.id)}>
                    Edit
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {popup && (
        <div className="missing-popup-container">
          <PopupMissing
            setPopup={setPopup}
            missingData={missingData}
            handleYes={handleYes}
            handleNo={handleNo}
          />
        </div>
      )}
      {editModule && (
        <div className="edit-module-container">
          <EditModule
            handleCancel={handleCancel}
            missingData={missingData}
            handleSend={handleSend}
          />
        </div>
      )}
    </div>
  );
};

export default OrdersList;
