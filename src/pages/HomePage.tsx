import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DocumentData } from "firebase/firestore"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getUserFromDB } from "../redux/actionCreators";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Recepie } from "../components/recepie/Recepie";
import defaultAvatar from "../assets/default-avatar.jpg"
import "./HomePage.css";

function HomePage() {
    const dispatch = useDispatch();
    const id = useSelector((state: RootStateOrAny) => state.auth.authInfo.uid);
    const email = useSelector((state: RootStateOrAny) => state.auth.authInfo.email);
    const userDataFromDB = useSelector((state: RootStateOrAny) => state.user.userInfo);
    const errorInfo = useSelector((state: RootStateOrAny) => state.user.errorInfo);

    const [userData, setUserData] = useState<DocumentData>({});
    const [error, setError] = useState("");

    useEffect(() => {
        dispatch(getUserFromDB({ id }));
    }, []);

    useEffect(() => {
        let data = userDataFromDB;
        if (!userDataFromDB.name) {
            data = { ...data, name: email }
        }
        if (!userDataFromDB.avatar) {
            data = { ...data, avatar: defaultAvatar }
        }
        setUserData(data);
    }, [userDataFromDB]);

    useEffect(() => {
        setError(errorInfo);
    }, [errorInfo]);

    return (
        <div>
            <Header />
            <main className="home-page">
                {
                    error ? (
                        <div className="error-info">{error}</div>
                    ) : (
                        <section className="personal-info">
                            <img src={userData.avatar} alt="avatar" />
                            <div>
                                <h1>{userData.name}</h1>
                                <p>{userData.details} </p>
                            </div>
                        </section>
                    )
                }
                <section className="profile__nav-block">
                    <nav>
                        <ul className="nav__list profile__nav-list">
                            <li>
                                <Link to="">My Cookbooks</Link>
                            </li>
                            <li>
                                <Link to="">My Recepies</Link>
                            </li>
                            <li>
                                <Link to="">My Settings</Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="main-btn create-recepie-btn">Create New Recepie</button>
                </section>
                <section>
                    <Recepie />
                    <Recepie />
                    <Recepie />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default HomePage;