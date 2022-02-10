import React from 'react';
import { cookbooksTab, recepiesTab, settingsTab } from "../../constants";
import "./ProfileNavigation.css";

interface ProfileNavigationProps {
    activeTab: string,
    setActiveTab: Function
}

export const ProfileNavigation = ({ activeTab, setActiveTab }: ProfileNavigationProps) => {
    return (
        <nav>
            <ul className="nav-list profile__nav-list">
                <li>
                    <button
                        className={"profile__nav-btn" + (activeTab === cookbooksTab ? " profile__nav-btn--active" : "")}
                        onClick={() => setActiveTab(cookbooksTab)}>
                        My Cookbooks
                    </button>
                </li>
                <li>
                    <button
                        className={"profile__nav-btn" + (activeTab === recepiesTab ? " profile__nav-btn--active" : "")}
                        onClick={() => setActiveTab(recepiesTab)}>
                        My Recepies
                    </button>
                </li>
                <li>
                    <button
                        className={"profile__nav-btn" + (activeTab === settingsTab ? " profile__nav-btn--active" : "")}
                        onClick={() => setActiveTab(settingsTab)}>
                        My Settings
                    </button>
                </li>
            </ul>
        </nav>
    )
};
