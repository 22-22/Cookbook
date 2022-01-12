import React from 'react';
import { Link } from 'react-router-dom';
import signUp from '../assets/signup.png';
import './SignUpPage.css';
import Logo from '../components/common/Logo';
import SignUpForm from '../components/SignUpForm';

function SignUpPage() {
    return (
        <div className="signup-page">
            <img className="signup-image" src={signUp} alt="cereals" />
            <section className="signup-form-container">
                <Logo />
                <h1 className="signup-title">Join Our Community</h1>
                <span className="signup-text">Already have an account? </span>
                <Link className="signup-link" to="/signin">Sign In</ Link>
                <SignUpForm />
            </section>
        </div>
    )
}

export default SignUpPage;