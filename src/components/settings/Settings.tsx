import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updatePassword, createUpdateFirestoreAction } from "../../redux/actionCreators";
import { selectError, selectUserInfo } from "../../redux/selectors";
import { EditSettingsBtn } from "../common/EditSettingsBtn";
import { SaveSettingsBtn } from "../common/SaveSettingsBtn";
import { SettingsInput } from "../common/SettingsInput";
import './Settings.css';

export const Settings = () => {
    const dispatch = useDispatch();
    const userDataFromStore = useSelector(selectUserInfo);
    const [editMode, setEditMode] = useState({
        name: false,
        email: false,
        password: false,
    });
    const [settingsInput, setSettingsInput] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [attemptToSave, setAttemptToSave] = useState("");

    useEffect(() => {
        setEditMode((prevState) => ({
            ...prevState,
            [attemptToSave]: false
        }));
        setSettingsInput((prevState) => ({
            ...prevState,
            [attemptToSave]: ""
        }));
        setAttemptToSave("");
    }, [userDataFromStore]);

    const toggleEditMode = (key: string) => {
        if (editMode) {
            setSettingsInput((prevState) => ({
                ...prevState,
                [key]: ""
            }));
        }
        setEditMode((prevState: any) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setSettingsInput((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveEmail = () => {
        dispatch(updateEmail({ email: settingsInput.email }));
        setAttemptToSave("email");
    };

    const saveName = () => {
        const payload = { id: userDataFromStore.uid, key: "name", value: settingsInput.name };
        dispatch(createUpdateFirestoreAction(payload));
        setAttemptToSave("name");
    };

    const savePassword = () => {
        dispatch(updatePassword({ password: settingsInput.password }));
        setAttemptToSave("password");
    }

    return (
        <section className="settings-block">
            <h2 className="settings-title">Personal information</h2>
            <form>
                <div className="settings-grid">
                    <label className="settings-label" htmlFor="name">Name</label>
                    {editMode.name ? (
                        <SettingsInput type="text" id="name" name="name"
                            value={settingsInput.name} handleInputChange={handleInputChange} />
                    ) : (
                        <p className="settings-text">{userDataFromStore.name}</p>
                    )}
                    <EditSettingsBtn editMode={editMode.name} toggleEditMode={toggleEditMode} type="name" />
                    {editMode.name && (
                        <SaveSettingsBtn save={saveName} />
                    )}
                </div>
                <div className="settings-grid">
                    <label className="settings-label" htmlFor="email">Email</label>
                    {editMode.email ? (
                        <SettingsInput type="email" id="email" name="email"
                            value={settingsInput.email} handleInputChange={handleInputChange} />
                    ) : (
                        <p className="settings-text">{userDataFromStore.email}</p>
                    )}
                    <EditSettingsBtn editMode={editMode.email} toggleEditMode={toggleEditMode} type="email" />
                    {editMode.email && (
                        <SaveSettingsBtn save={saveEmail} />
                    )}
                </div>
                <div className={editMode.password ? "settings-grid" : "settings-grid--longer"}>
                    <label className="settings-label" htmlFor="password">Password</label>
                    {editMode.password ? (
                        <SettingsInput type="password" id="password" name="password"
                            value={settingsInput.password} handleInputChange={handleInputChange} />
                    ) : (
                        <p className="settings-text">{userDataFromStore.password}</p>
                    )}
                    <EditSettingsBtn editMode={editMode.password} toggleEditMode={toggleEditMode} type="password" />
                    {editMode.password && (
                        <SaveSettingsBtn save={savePassword} />
                    )}
                </div>
            </form>
        </section>
    )
}
