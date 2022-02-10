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
    const errorInfo = useSelector(selectError);

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

    const toggleEditMode = (key: string) => {
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
        // попробовала так, но условие отрабатывает до того, как ошибка приходит из стора
        if (!errorInfo) {
            setEditMode((prevState) => ({
                ...prevState,
                email: false
            }));
            setSettingsInput((prevState) => ({
                ...prevState,
                email: ""
            }));
        }
    };

    const saveToFirestore = (key: string) => {
        // тут можно было бы сделать функцию чуть более универсальной и написать не
        // settingsInput.name, а settingsInput[key], но мне не дает ts.
        const payload = { id: userDataFromStore.uid, key, value: settingsInput.name };
        dispatch(createUpdateFirestoreAction(payload));
        setEditMode((prevState) => ({
            ...prevState,
            name: false
        }));
        setSettingsInput((prevState) => ({
            ...prevState,
            name: ""
        }));
    };

    const savePassword = () => {
        dispatch(updatePassword({ password: settingsInput.password }));
        setEditMode((prevState) => ({
            ...prevState,
            password: false
        }));
        setSettingsInput((prevState) => ({
            ...prevState,
            password: ""
        }));
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
                        <SaveSettingsBtn save={saveToFirestore} field="name" />
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
                        <p className="settings-text"></p>
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
