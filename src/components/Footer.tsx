import React from 'react';
import './Footer.css';
import '../App.css';
import companyName from '../assets/company-name.png';
import Logo from './common/Logo';

function Footer() {
    return (
        <footer className="footer">
            <Logo />
            <nav className="navigation">
                <ul>
                    <li>Recepies</li>
                    <li>Cookbook</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <a className="email-address" href="mailto: plzfeedme@itechart.com">plzfeedme@itechart.com</a>
            <div>Study Project v2, 2021</div>
            <img className="company-name" src={companyName} alt="iTechArt" />
        </footer>
    )
}

export default Footer;
