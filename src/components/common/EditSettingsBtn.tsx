import React from "react";
import "../settings/Settings.css";

interface EditSettingsBtnProps {
    editMode: Boolean,
    toggleEditMode: Function,
    type?: string
}

export const EditSettingsBtn = ({ editMode, toggleEditMode, type }: EditSettingsBtnProps) => {
    const btnName = type === "password" ? "Change my password" : "Edit";
    const handleClick = () => {
        if (type) {
            toggleEditMode(type);
        } else {
            toggleEditMode();
        }
    }
    return <button
        className={"settings-btn" + (editMode ? " settings-btn--grey" : "")}
        type="button"
        onClick={handleClick}
    >
        {editMode ? "Cancel" : btnName}
    </button>;
};
