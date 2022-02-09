import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updatePassword, createUpdateFirestoreAction } from "../../redux/actionCreators";
import { selectError, selectUserInfo } from "../../redux/selectors";
import { EditSettingsBtn } from "../common/EditSettingsBtn";
import { SaveSettingsBtn } from "../common/SaveSettingsBtn";
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
    // firebase не возвращает пароль, так что просто поставила точки
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ".....",
    });

    useEffect(() => {
        const { name, email } = userDataFromStore;
        if (name) {
            setUserData((prevState) => ({
                ...prevState,
                name, email
            }));
        }
    }, [userDataFromStore]);

    const toggleEditMode = (key: string) => {
        setEditMode((prevState: any) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const saveEmail = () => {
        dispatch(updateEmail({ email: userData.email }));
        // попробовала так, но условие отрабатывает до того, как ошибка приходит из стора
        if (!errorInfo) {
            setEditMode((prevState) => ({
                ...prevState,
                email: false
            }));
        }
    };

    const saveToFirestore = (key: string) => {
        // тут можно было бы сделать функцию чуть более универсальной и написать не
        // userData.name, а userData[key], но мне не дает ts.
        const payload = { id: userDataFromStore.uid, key, value: userData.name };
        dispatch(createUpdateFirestoreAction(payload));
        setEditMode((prevState) => ({
            ...prevState,
            name: false
        }));
    };

    const savePassword = () => {
        dispatch(updatePassword({ password: userData.password }));
        setEditMode((prevState) => ({
            ...prevState,
            password: false
        }));
    }

    return (
        <section className="settings-block">
            <h2 className="settings-title">Personal information</h2>
            <form>
                <div className="settings-grid">
                    <label className="settings-label" htmlFor="name">Name</label>
                    <input className={"settings-input" + (editMode.name ? " settings-input--active" : " settings-input--disabled")}
                        type="text" id="name" name="name" value={userData.name} onChange={handleInputChange}
                        disabled={editMode.name ? false : true} />
                    <EditSettingsBtn editMode={editMode.name} toggleEditMode={toggleEditMode} type="name" />
                    {editMode.name && (
                        <SaveSettingsBtn save={saveToFirestore} field="name" />
                    )}
                </div>
                <div className="settings-grid">
                    <label className="settings-label" htmlFor="email">Email</label>
                    <input className={"settings-input" + (editMode.email ? " settings-input--active" : " settings-input--disabled")}
                        type="email" id="email" name="email" value={userData.email} onChange={handleInputChange}
                        disabled={editMode.email ? false : true} />
                    <EditSettingsBtn editMode={editMode.email} toggleEditMode={toggleEditMode} type="email" />
                    {editMode.email && (
                        <SaveSettingsBtn save={saveEmail} />
                    )}
                </div>
                <div className={editMode.password ? "settings-grid" : "settings-grid--longer"}>
                    <label className="settings-label" htmlFor="password">Password</label>
                    <input className={"settings-input" + (editMode.password ? " settings-input--active" : " settings-input--disabled")}
                        type="text" id="password" name="password" value={userData.password} onChange={handleInputChange}
                        disabled={editMode.password ? false : true} />
                    <EditSettingsBtn editMode={editMode.password} toggleEditMode={toggleEditMode} type="password" />
                    {editMode.password && (
                        <SaveSettingsBtn save={savePassword} />
                    )}
                </div>
            </form>
        </section>
    )
}
