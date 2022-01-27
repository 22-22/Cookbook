import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DocumentData } from "firebase/firestore"
import { useDispatch, useSelector } from "react-redux";
import { getUserFromDB } from "../redux/actionCreators";
import { selectError, selectUserInfo } from "../redux/selectors";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Recepie } from "../components/recepie/Recepie";
import "./HomePage.css";

function HomePage() {
    const dispatch = useDispatch();
    const userDataFromDB = useSelector(selectUserInfo);
    const errorInfo = useSelector(selectError);

    const [userData, setUserData] = useState<DocumentData>({});
    const [error, setError] = useState("");

    useEffect(() => {
        dispatch(getUserFromDB({ id: userDataFromDB.uid }));
    }, []);

    useEffect(() => {
        setUserData(userDataFromDB);
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