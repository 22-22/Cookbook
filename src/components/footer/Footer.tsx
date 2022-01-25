import React from "react";
import Logo from "../common/Logo";
import companyName from "../../assets/company-name.png";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <nav>
                <ul className="nav__list footer__nav-list">
                    <li>Recepies</li>
                    <li>Cookbook</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <a className="email-address" href="mailto: plzfeedme@itechart.com">plzfeedme@itechart.com</a>
            <div>
                <span>Study Project v2, 2021</span>
                <img className="company-name" src={companyName} alt="iTechArt" />
            </div>
        </footer>
    )
}

export default Footer;
