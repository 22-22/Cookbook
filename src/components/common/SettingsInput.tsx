import React, { ChangeEventHandler } from 'react';
import "../settings/Settings.css";

interface SettingsInputProps {
    type: string,
    id: string,
    name: string,
    value: string,
    handleInputChange: ChangeEventHandler
}

export const SettingsInput = ({ type, id, name, value, handleInputChange }: SettingsInputProps) => {
    return (
        <input
            className="settings-input"
            type={type} id={id} name={name}
            value={value}
            onChange={handleInputChange}
        />
    )
};
