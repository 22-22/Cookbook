import React from "react";
import "../settings/Settings.css";

interface EditSettingsBtnProps {
    editMode: Boolean,
    toggleEditMode: Function,
    type: string
}

export const EditSettingsBtn = ({ editMode, toggleEditMode, type }: EditSettingsBtnProps) => {
    const btnName = type === "password" ? "Change my password" : "Edit";
    return <button
        className={"settings-btn" + (editMode ? " settings-btn--grey" : "")}
        type="button"
        onClick={() => toggleEditMode(type)}
    >
        {editMode ? "Cancel" : btnName}
    </button>;
};
