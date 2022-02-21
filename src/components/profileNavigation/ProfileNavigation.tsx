import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { cookbooksTab, recepiesTab, settingsTab } from "../../constants";
import { createRemoveErrorAction } from "../../redux/actionCreators/commonActionCreators";
import { selectError } from "../../redux/selectors/userSelectors";
import "./ProfileNavigation.css";

interface ProfileNavigationProps {
    activeTab: string,
    setActiveTab: Function
}

export const ProfileNavigation = ({ activeTab, setActiveTab }: ProfileNavigationProps) => {
    const dispatch = useDispatch();
    const errorInfo = useSelector(selectError);
    const changeTab = (tab: string) => {
        setActiveTab(tab);
        if (errorInfo) {
            dispatch(createRemoveErrorAction());
        }
    }
    return (
        <nav>
            <ul className="nav-list profile__nav-list">
                <li>
                    <button
                        className={"profile__nav-btn" + (activeTab === cookbooksTab ? " profile__nav-btn--active" : "")}
                        onClick={() => changeTab(cookbooksTab)}>
                        My Cookbooks
                    </button>
                </li>
                <li>
                    <button
                        className={"profile__nav-btn" + (activeTab === recepiesTab ? " profile__nav-btn--active" : "")}
                        onClick={() => changeTab(recepiesTab)}>
                        My Recepies
                    </button>
                </li>
                <li>
                    <button
                        className={"profile__nav-btn" + (activeTab === settingsTab ? " profile__nav-btn--active" : "")}
                        onClick={() => changeTab(settingsTab)}>
                        My Settings
                    </button>
                </li>
            </ul>
        </nav>
    )
};
