import React from 'react';
import { Link } from 'react-router-dom';
import signUp from '../assets/signup.png';
import './SignPages.css';
import Logo from '../components/common/Logo';
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
    return (
        <main className="sign-page">
            <img className="sign-image" src={signUp} alt="cereals" />
            <section className="sign-form-container sign-up-form-container">
                <Logo />
                <h1 className="sign-title">Join Our Community</h1>
                <span className="sign-text">Already have an account? </span>
                <Link className="sign-link" to="/signin">Sign In</ Link>
                <SignUpForm />
            </section>
        </main>
    )
}

export default SignUpPage;