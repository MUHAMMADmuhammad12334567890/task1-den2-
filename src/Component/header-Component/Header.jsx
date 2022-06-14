import "./header.css";
import React from "react";
import logo from "../../logo/lock-128.webp";

const Header = () => {
  return (
    <div className="hedar_component">
      <h1>intocode Coding Shopcamp</h1>
      <img className="header_component_img1" src={logo} alt="logo_lock" />
    </div>
  );
};

export default Header;

