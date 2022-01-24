import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/common/Logo";
import SignUpForm from "../components/signUpForm/SignUpForm";
import { useAuth } from "../components/common/useAuth";
import signUp from "../assets/signup.png";
import "./SignPages.css";

function SignUpPage() {
    const signUpWithAuth = useAuth(SignUpForm);
    return (
        <main className="sign-page">
            <img className="sign-image" src={signUp} alt="cereals" />
            <section className="sign-form-container sign-up-form-container">
                <Logo />
                <h1 className="sign-title">Join Our Community</h1>
                <span className="sign-text">Already have an account? </span>
                <Link className="sign-link" to="/signin">Sign In</ Link>
                {signUpWithAuth}
            </section>
        </main>
    )
}

export default SignUpPage;