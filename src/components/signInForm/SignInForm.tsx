import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/actionCreators";
import { SignInValues } from "../../tsTypes";
import hiddenInput from "../../assets/icons/hidden-input.png";
import shownInput from "../../assets/icons/shown-input.png";
import "../SignForms.css";

export const SignInForm = () => {
    const dispatch = useDispatch();
    const [errorInfo, setErrorInfo] = useState("");
    const [passwordHidden, setPasswordHidden] = useState(true);
    const errorFromFirebase = useSelector((state: RootStateOrAny) => state.errorInfo);

    useEffect(() => {
        if (errorFromFirebase) {
            setErrorInfo(`Error: ${errorFromFirebase}. Please try again.`);
        }
    }, [errorFromFirebase]);

    const togglePasswordHidden = () => {
        setPasswordHidden((prevState) => !prevState);
    }

    const handleSignInSubmit = async (
        values: SignInValues,
        { setSubmitting }: FormikHelpers<SignInValues>
    ) => {
        const { email, password } = values;
        dispatch(signInUser({ email, password }));
        setSubmitting(false);
    }
    return (
        <>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSignInSubmit}>
                <Form className="sign-form">
                    <label className="sign-form__label" htmlFor="email">Email</label>
                    <Field className="sign-form__input" type="email" id="email" name="email" />
                    <div className="sign-form__label-block">
                        <label className="sign-form__label" htmlFor="password">Password</label>
                        <Link className="sign-form__link" to="">Forgot password?</Link>
                    </div>
                    <div className="sign-form__input-block">
                        <Field className="sign-form__input" type={passwordHidden ? "password" : "text"}
                            id="password" name="password" />
                        <button type="button" onClick={togglePasswordHidden}>
                            <img className="sign-form__icon" src={passwordHidden ? hiddenInput : shownInput} alt="hidden" />
                        </button>
                    </div>
                    <button className="main-btn sign-form__btn" type="submit">Sign In</button>
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
