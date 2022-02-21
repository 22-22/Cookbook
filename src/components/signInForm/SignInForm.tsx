import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "../../redux/actionCreators/userActionCreators";
import { SignInValues } from "../../tsTypes";
import { selectError } from "../../redux/selectors/userSelectors";
import { ShowHidePasswordBtn } from "../common/ShowHidePasswordBtn";
import { ErrorInfo } from "../common/ErrorInfo";
import "../SignForms.css";

export const SignInForm = () => {
    const dispatch = useDispatch();
    const [errorInfo, setErrorInfo] = useState("");
    const [isPasswordHidden, setPasswordHidden] = useState(true);
    const errorFromFirebase = useSelector(selectError);

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
                        <Field className="sign-form__input" type={isPasswordHidden ? "password" : "text"}
                            id="password" name="password" />
                        <ShowHidePasswordBtn
                            togglePasswordHidden={togglePasswordHidden}
                            isPasswordHidden={isPasswordHidden}
                        />
                    </div>
                    <button className="main-btn sign-form__btn" type="submit">Sign In</button>
                </Form>
            </Formik>
            {
                errorInfo && <ErrorInfo errorInfo={errorInfo} />
            }
        </>
    )
}
