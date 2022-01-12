import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import hiddenInput from '../assets/icons/hidden-input.png';
import './SignUpForm.css';

interface Values {
    email: string;
    password: string;
    confirmedPassword: string;
}

function SignUpForm() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [errorInfo, setErrorInfo] = useState("");

    const checkIfSamePassword = (password: string, confirmedPassword: string): Boolean => {
        if (password === confirmedPassword) {
            return true;
        } else {
            setErrorInfo("Error: Passwords differ. Please try again.");
            return false;
        }
    }

    const handleSubmit = (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
    ) => {
        const { email, password, confirmedPassword } = values;

        if (password) {
            const passwordIsSame = checkIfSamePassword(password, confirmedPassword);
            if (passwordIsSame) {
                setSubmitting(false);
                createUserWithEmailAndPassword(auth, email, password)
                    .then((response) => {
                        navigate("/");
                        setErrorInfo("");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        setErrorInfo(`Error: ${errorCode}. Please try again.`);
                    });
            }
        } else {
            setErrorInfo("Please enter your password");
        }

    }

    return (
        <>
            <Formik initialValues={{
                email: '',
                password: '',
                confirmedPassword: '',
            }}
                onSubmit={handleSubmit}>
                <Form className="signup-form">
                    <label className="signup-form__label" htmlFor="email">Email</label>
                    <Field className="signup-form__input" id="email" name="email"></Field>
                    <div className="signup-form__label-block">
                        <label className="signup-form__label" htmlFor="password">Password</label>
                        <Link className="signup-form__link" to="">Forgot Password?</Link>
                    </div>
                    <div className="signup-form__input-block">
                        <Field className="signup-form__input" id="password" name="password"></Field>
                        <img className="signup-form__icon" src={hiddenInput} alt="hidden" />
                    </div>
                    <label className="signup-form__label" htmlFor="confirmedPassword">Confirm Password</label>
                    <div className="signup-form__input-block">
                        <Field className="signup-form__input" id="confirmedPassword" name="confirmedPassword"></Field>
                        <img className="signup-form__icon" src={hiddenInput} alt="hidden" />
                    </div>
                    <button className="signup-form__btn" type="submit">Sign Up</button>
                </Form>
            </Formik>
            <div className="signup-form__error-info">
                {errorInfo}
            </div>
        </>
    )
}

export default SignUpForm;
