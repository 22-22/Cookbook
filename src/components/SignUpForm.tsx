import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useNavigate, Link } from "react-router-dom";
import hiddenInput from '../assets/icons/hidden-input.png';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../redux/actionCreators';
import { SignUpValues } from '../tsTypes';
import './SignForms.css';

const errTryAgain = "Please try again.";
const errDiffPasswords = `Error: Passwords differ. ${errTryAgain}`;
const errNoPassword = "Please enter your password.";

function SignUpForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errorInfo, setErrorInfo] = useState("");
    const auth = useSelector((state: RootStateOrAny) => state.isAuthenticated);
    const errorFromFirebase = useSelector((state: RootStateOrAny) => state.errorInfo);

    useEffect(() => {
        if (auth) {
            navigate("/");
        }
    }, [auth]);

    useEffect(() => {
        if (errorFromFirebase) {
            setErrorInfo( `Error: ${errorFromFirebase}. ${errTryAgain}`);
        }
    }, [errorFromFirebase]);

    const checkIfSamePassword = (password: string, confirmedPassword: string): Boolean => {
        if (password === confirmedPassword) {
            return true;
        } else {
            setErrorInfo(errDiffPasswords);
            return false;
        }
    }

    const handleSubmit = (
        values: SignUpValues,
        { setSubmitting }: FormikHelpers<SignUpValues>
    ) => {
        const { email, password, confirmedPassword } = values;

        if (password) {
            const passwordIsSame = checkIfSamePassword(password, confirmedPassword);
            if (passwordIsSame) {
                dispatch(signUpUser({ email, password }));
                setSubmitting(false);
            }
        } else {
            setErrorInfo(errNoPassword);
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
                    <button className="main-btn sign-form__btn" type="submit">Sign Up</button>
                </Form>
            </Formik>
            {errorInfo &&
                <div className="sign-form__error-info">
                    {errorInfo}
                </div>
            }
        </>
    )
}

export default SignUpForm;
