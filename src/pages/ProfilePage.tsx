import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFromDB } from "../redux/actionCreators";
import { selectError, selectUserInfo } from "../redux/selectors";
import { cookbooksTab, recepiesTab, settingsTab } from "../constants";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Recepie } from "../components/recepie/Recepie";
import { ErrorInfo } from "../components/common/ErrorInfo";
import { Settings } from "../components/settings/Settings";
import { EditAvatarForm } from "../components/editAvatarForm/EditAvatarForm";
import { ProfileNavigation } from "../components/profileNavigation/ProfileNavigation";
import "./ProfilePage.css";

function ProfilePage() {
    const dispatch = useDispatch();
    const userDataFromStore = useSelector(selectUserInfo);
    const errorInfo = useSelector(selectError);
    const [activeTab, setActiveTab] = useState(settingsTab);

    useEffect(() => {
        dispatch(getUserFromDB({ id: userDataFromStore.uid }));
    }, []);

    return (
        <div>
            <Header />
            <main className="profile-page">
                <section className="personal-info">
                    {activeTab === settingsTab
                        ? <EditAvatarForm />
                        : <img className="avatar" src={userDataFromStore.avatar} alt="avatar" />
                    }
                    <div className="personal-info__text-block">
                        <h1>{userDataFromStore.name}</h1>
                        <p>{userDataFromStore.details} </p>
                    </div>
                </section>
                <section className="profile__nav-block">
                    <ProfileNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
                    <button className="main-btn create-recepie-btn">Create New Recepie</button>
                </section>
                {errorInfo && (
                    <ErrorInfo errorInfo={errorInfo} />
                )}
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