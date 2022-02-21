import React, { MouseEventHandler } from "react";
import "../settings/Settings.css";

interface SaveSettingsBtnProps {
    save: MouseEventHandler,
}

export const SaveSettingsBtn = ({ save }: SaveSettingsBtnProps) => {
    return <button className="settings-btn" type="button" onClick={save}>Save</button>;
};
