import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromDB, uploadImage } from "../redux/actionCreators";
import { selectError, selectUserInfo } from "../redux/selectors";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Recepie } from "../components/recepie/Recepie";
import { ErrorInfo } from "../components/common/ErrorInfo";
import { Settings } from "../components/settings/Settings";
import cameraIcon from "../assets/icons/camera.png";
import "./ProfilePage.css";

const cookbooksTab = "cookbooks";
const recepiesTab = "recepies";
const settingsTab = "settings";

function ProfilePage() {
    const dispatch = useDispatch();
    const userDataFromStore = useSelector(selectUserInfo);
    const errorInfo = useSelector(selectError);

    const [inputFile, setInputFile] = useState<File>();
    const [avatar, setAvatar] = useState("");
    const [activeTab, setActiveTab] = useState(settingsTab);

    useEffect(() => {
        dispatch(getUserFromDB({ id: userDataFromStore.uid }));
    }, []);

    useEffect(() => {
        setAvatar(userDataFromStore.avatar);
    }, [userDataFromStore]);

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
        }
    }

    const changeTab = (tabName: string) => {
        setActiveTab(tabName);
    }

    return (
        <div>
            <Header />
            <main className="home-page">
                {
                    errorInfo ? (
                        <ErrorInfo errorInfo={errorInfo} />
                    ) : (
                        <section className="personal-info">
                            <form className="avatar-form" method="post" encType="multipart/form-data" onSubmit={saveAvatar}>
                                <div className="avatar-block">
                                    <img className={"avatar" + (activeTab === settingsTab ? " avatar--blurred" : "")}
                                        src={avatar} alt="avatar" />
                                    {activeTab === settingsTab && (
                                        <>
                                            <img className="camera-icon" src={cameraIcon} alt="camera" />
                                            <input type="file" name="avatar" id="avatar" accept="image/*" onChange={handleInput} />
                                        </>
                                    )}
                                </div>
                                {activeTab === settingsTab && <button className="settings-btn">Save</button>}
                            </form>
                            <div>
                                <h1>{userDataFromStore.name}</h1>
                                <p>{userDataFromStore.details} </p>
                            </div>
                        </section>
                    )
                }
                <section className="profile__nav-block">
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
                    <button className="main-btn create-recepie-btn">Create New Recepie</button>
                </section>
                {activeTab === cookbooksTab && <div>Coming soon!</div>}
                {activeTab === recepiesTab &&
                    <section>
                        <Recepie />
                        <Recepie />
                        <Recepie />
                    </section>
                }
                {activeTab === settingsTab && <Settings />}
            </main>
            <Footer />
        </div>
    )
}

export default ProfilePage;