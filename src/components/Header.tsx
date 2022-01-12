import React from 'react';
import './Header.css';
import '../App.css';
import logo from '../assets/logo.png';
import searchIcon from '../assets/icons/search.png';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" />
            <h1 className="logo">Feed<span className="logo--colored">me</span></h1>
            <nav className="navigation">
                <ul>
                    <li>Recepies</li>
                    <li>Cookbook</li>
                </ul>
            </nav>
            <div className="search">
                <img className="search__icon" src={searchIcon} alt="search-icon" />
                <input className="input search__input" type="text" name="searchInput"/>
            </div>
            <button className="create-btn">Create CookBook</button>
            <div className="user">John Doe</div>
        </header>
    )
}

export default Header;
