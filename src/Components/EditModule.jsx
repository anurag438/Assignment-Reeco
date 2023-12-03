import React, { useState } from "react";
import avacad from "./avacad.jpg";
import { useDispatch } from "react-redux";
import { editData } from "../redux/actions";

const EditModule = ({ handleCancel, handleSend, missingData }) => {
  const dispatch = useDispatch();
  const { price, quantity, total } = missingData[0];
  const [editPrice, setEditPrice] = useState(price);
  const [editQuantity, setEditQuantity] = useState(quantity);
  const [editTotal, setEditTotal] = useState(total);
  const [reason,setReason] = useState([])
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "price") {
      setEditPrice(value);
    } else if (name === "quantity") {
      setEditQuantity(value);
    } else if (name === "total") {
      setEditTotal(value);
    }
  };
  const handleSendBtn = () => {
    handleSend();
    dispatch(
      editData({
        ...missingData[0],
        price: editPrice,
        quantity: editQuantity,
        total: editTotal,
        status:reason
      })
    );
  };
  const handleIncrement = ()=>{
    setEditQuantity(prev=>(Number(prev)+1))
  }
  const handleDecrement = ()=>{
    setEditQuantity(prev=>(Number(prev)-1))
  }
  const handleReason = (e)=>{
    setReason(prev=>([...prev,e.target.innerHTML]))
  }
  return (
    <div className="edit-module">
      {missingData && (
        <>
          <p>{missingData[0].productName}</p>
          <p>{missingData[0].brand}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <img
                src={avacad}
                alt=""
                style={{ height: "130px", width: "130px" }}
              />
            </div>
            <div>
              <div style={{ display: "flex" }}>
                <label htmlFor="">Price($)</label>
                <div>
                  <input
                    name="price"
                    type="text"
                    value={editPrice}
                    onChange={handleInputChange}
                  />
                  /6*1LB
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <label htmlFor="">Quantity</label>
                <div>
                  {" "}
                  <button onClick={handleDecrement}>-</button>{" "}
                  <input
                    name="quantity"
                    type="text"
                    value={editQuantity}
                    onChange={handleInputChange}
                  />{" "}
                  <button onClick={handleIncrement}>+</button> /6x1LB
                </div>
              </div>
              <div>
                <label htmlFor="">Total</label>
                <input
                  type="text"
                  name="total"
                  value={editTotal}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          <div>
            <p>Choose reason (Optional)</p>
            <ul>
              <li onClick={handleReason}>Missing Product</li>
              <li onClick={handleReason}>Quality is not the same</li>
              <li onClick={handleReason}>Price is not the same</li>
              <li onClick={handleReason}>other</li>
            </ul>
          </div>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSendBtn}>Send</button>
        </>
      )}
    </div>
  );
};

export default EditModule;
