import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo } from "../../redux/selectors";
import { uploadImage } from "../../redux/actionCreators";
import { EditSettingsBtn } from "../common/EditSettingsBtn";
import cameraIcon from "../../assets/icons/camera.png";
import "./EditAvatarForm.css";
import "../settings/Settings.css"

export const EditAvatarForm = () => {
    const dispatch = useDispatch();
    const userDataFromStore = useSelector(selectUserInfo);
    const [editMode, setEditMode] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [inputFile, setInputFile] = useState<File>();

    const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            const file = evt.target.files[0];
            setAvatar(URL.createObjectURL(file));
            setInputFile(file);
        };
    };

    const saveAvatar = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (inputFile) {
            const payload = { id: userDataFromStore.uid, file: inputFile, folderName: "avatars" };
            dispatch(uploadImage(payload));
            setEditMode(false);
        }
    }

    const toggleEditMode = () => {
        setEditMode(!editMode);
        setAvatar(userDataFromStore.avatar);
    }
    return (
        <form className="avatar-form" method="post" encType="multipart/form-data" onSubmit={saveAvatar}>
            <div className="avatar-block">
                <img className={"avatar" + (editMode ? " avatar--blurred" : "")}
                    src={editMode ? avatar : userDataFromStore.avatar} alt="avatar" />
                {editMode && (
                    <>
                        <img className="camera-icon" src={cameraIcon} alt="camera" />
                        <input type="file" name="avatar" id="avatar" accept="image/*" onChange={handleInput} />
                    </>
                )}
            </div>
            <div>
                <EditSettingsBtn editMode={editMode} toggleEditMode={toggleEditMode} />
                {editMode && (
                    <button className="settings-btn settings-btn--margin">Save</button>
                )}
            </div>
        </form>
    )
};
