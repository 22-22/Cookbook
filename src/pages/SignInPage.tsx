import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/common/Logo';
import { SignInForm } from '../components/SignInForm';
import { useAuth } from "../components/common/useAuth";
import signUp from '../assets/signin.png';
import './SignPages.css';

function SignInPage() {
    const formWithAuth = useAuth(SignInForm);
    return (
        <main className="sign-page">
            <section className="sign-form-container sign-in-form-container">
                <Logo />
                <h1 className="sign-title">Welcome back</h1>
                <span className="sign-text">New here? </span>
                <Link className="sign-link" to="/signup">Create an account</Link>
                {formWithAuth}
            </section>
            <img className="sign-image sign-in-image" src={signUp} alt="pancakes" />
        </main>
    )
}

export default SignInPage;