import React from "react";
import "../settings/Settings.css";

interface SaveSettingsBtnProps {
    save: Function,
    field?: string
}

export const SaveSettingsBtn = ({ save, field }: SaveSettingsBtnProps) => {
    const handleClick = () => {
        if (field) {
            save(field);
        } else {
            save();
        }
    }
    return <button className="settings-btn" type="button" onClick={handleClick}>Save</button>;
};
