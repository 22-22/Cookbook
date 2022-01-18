import React from 'react';
import './Header.css';
import searchIcon from '../assets/icons/search.png';
import Logo from './common/Logo';

function Header() {
    return (
        <header className="header">
            <Logo />
            <nav>
                <ul className="nav__list header__nav-list">
                    <li>Recepies</li>
                    <li>Cookbook</li>
                </ul>
            </nav>
            <div className="search">
                <img className="search__icon" src={searchIcon} alt="search-icon" />
                <input className="search__input" type="text" name="searchInput" />
            </div>
            <div>
                <button className="create-book-btn">Create CookBook</button>
                <span className="user">John Doe</span>
            </div>
        </header>
    )
}

export default Header;
