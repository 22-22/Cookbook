import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from "react-router-dom";
import hiddenInput from '../assets/icons/hidden-input.png';
import './SignForms.css';

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
                createUserWithEmailAndPassword(auth, email, password)
                    .then((response) => {
                        navigate("/");
                        setErrorInfo("");
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        setErrorInfo(`Error: ${errorCode}. Please try again.`);
                    });
                setSubmitting(false);
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
                <Form className="sign-form">
                    <label className="sign-form__label" htmlFor="email">Email</label>
                    <Field className="sign-form__input" id="email" name="email" />
                    <div className="sign-form__label-block">
                        <label className="sign-form__label" htmlFor="password">Password</label>
                        <Link className="sign-form__link" to="">Forgot Password?</Link>
                    </div>
                    <div className="sign-form__input-block">
                        <Field className="sign-form__input" id="password" name="password" />
                        <img className="sign-form__icon" src={hiddenInput} alt="hidden" />
                    </div>
                    <label className="sign-form__label" htmlFor="confirmedPassword">Confirm Password</label>
                    <div className="sign-form__input-block">
                        <Field className="sign-form__input" id="confirmedPassword" name="confirmedPassword" />
                        <img className="sign-form__icon" src={hiddenInput} alt="hidden" />
                    </div>
                    <button className="sign-form__btn" type="submit">Sign Up</button>
                </Form>
            </Formik>
            <div className="sign-form__error-info">
                {errorInfo}
            </div>
        </>
    )
}

export default SignUpForm;
