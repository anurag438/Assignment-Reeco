import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="header-container">
      <div className="title-container">
        <p className="header-title">Reeco</p>
        <ul>
          <li>Store</li>
          <li>Orders</li>
          <li>Analytics</li>
        </ul>
      </div>
      <div className="header-profile-container">
        <FontAwesomeIcon
          className="icon cart"
          style={{ margin: "0 70px 0 0" }}
          icon={faCartShopping}
        />
        <p>
          Hello, James
          <FontAwesomeIcon className="icon" icon={faCaretDown} />
        </p>
      </div>
    </div>
  );
};

export default Header;
