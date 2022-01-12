import React from 'react';
import './Footer.css';
import '../App.css';
import logo from '../assets/logo.png';
import companyName from '../assets/company-name.png';

function Footer() {
    return (
        <footer className="footer">
            <img src={logo} alt="logo" />
            <h1 className="logo">Feed<span className="logo--colored">me</span></h1>
            <nav className="navigation">
                <ul>
                    <li>Recepies</li>
                    <li>Cookbook</li>
                    <li>About Us</li>
                </ul>
            </nav>
            {/* <div className="email-address">plzfeedme@itechart.com</div> */}
            <a className="email-address" href="mailto: plzfeedme@itechart.com">plzfeedme@itechart.com</a>
            <div>Study Project v2, 2021</div>
            <img className="company-name" src={companyName} alt="iTechArt" />
        </footer>
    )
}

export default Footer;
