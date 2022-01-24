import React from "react";
import logo from "../../assets/logo.png";
import "./Logo.css";

function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo" />
            <h3 className="logo">Feed<span className="logo--colored">me</span></h3>
        </div>
    );
}

export default Logo;
