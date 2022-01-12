import React from 'react';
import './Header.css';
import '../App.css';
import searchIcon from '../assets/icons/search.png';
import Logo from './common/Logo';

function Header() {
    return (
        <header className="header">
            <Logo />
            <nav className="navigation">
                <ul>
                    <li>Recepies</li>
                    <li>Cookbook</li>
                </ul>
            </nav>
            <div className="search">
                <img className="search__icon" src={searchIcon} alt="search-icon" />
                <input className="search__input" type="text" name="searchInput"/>
            </div>
            <button className="create-btn">Create CookBook</button>
            <div className="user">John Doe</div>
        </header>
    )
}

export default Header;
