import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Recepie } from "../components/recepie/Recepie";
import avatar from "../assets/john-doe.png";
import "./HomePage.css";

function HomePage() {
    return (
        <div>
            <Header />
            <main className="home-page">
                <section className="personal-info">
                    <img src={avatar} alt="avatar" />
                    <div>
                        <h1>John Doe</h1>
                        <p>I don’t know about you but I love pizza. Especially when that
                            pizza comes with Papa John’s very own garlic pizza sticks. </p>
                    </div>
                </section>
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