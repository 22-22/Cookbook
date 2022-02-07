import React, { useEffect, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/actionCreators";
import { SignUpValues } from "../../tsTypes";
import { selectError } from "../../redux/selectors";
import { ShowHidePasswordBtn } from "../common/ShowHidePasswordBtn";
import { ErrorInfo } from "../common/ErrorInfo";
import "../SignForms.css";

const errTryAgain = "Please try again.";
const errDiffPasswords = `Error: Passwords differ. ${errTryAgain}`;
const errNoPassword = "Please enter your password.";

function SignUpForm() {
    const dispatch = useDispatch();
    const [errorInfo, setErrorInfo] = useState("");
    const [isHidden, setHidden] = useState({
        password: true,
        confirmedPassword: true
    });
    const errorFromFirebase = useSelector(selectError);

    useEffect(() => {
        if (errorFromFirebase) {
            setErrorInfo(`Error: ${errorFromFirebase}. ${errTryAgain}`);
        }
    }, [errorFromFirebase]);

    const togglePasswordHidden = (key: string) => {
        setHidden((prevState: any) => (
            {
                ...prevState,
                [key]: !prevState[key]
            }
        ));
    };

    const checkIfSamePassword = (password: string, confirmedPassword: string): Boolean => {
        if (password === confirmedPassword) {
            return true;
        } else {
            setErrorInfo(errDiffPasswords);
            return false;
        }
    };

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
    };

    return (
        <>
            <Formik initialValues={{
                email: "",
                password: "",
                confirmedPassword: "",
            }}
                onSubmit={handleSubmit}>
                <Form className="sign-form">
                    <label className="sign-form__label" htmlFor="email">Email</label>
                    <Field className="sign-form__input" type="email" id="email" name="email" />
                    <div className="sign-form__label-block">
                        <label className="sign-form__label" htmlFor="password">Password</label>
                        <Link className="sign-form__link" to="">Forgot Password?</Link>
                    </div>
                    <div className="sign-form__input-block">
                        <Field type={isHidden.password ? "password" : "text"}
                            className="sign-form__input" id="password" name="password" />
                        <ShowHidePasswordBtn
                            togglePasswordHidden={togglePasswordHidden}
                            isPasswordHidden={isHidden.password}
                            inputType="password"
                        />
                    </div>
                    <label className="sign-form__label" htmlFor="confirmedPassword">Confirm Password</label>
                    <div className="sign-form__input-block">
                        <Field type={isHidden.confirmedPassword ? "password" : "text"}
                            className="sign-form__input" id="confirmedPassword" name="confirmedPassword" />
                        <ShowHidePasswordBtn
                            togglePasswordHidden={togglePasswordHidden}
                            isPasswordHidden={isHidden.confirmedPassword}
                            inputType="confirmedPassword"
                        />
                    </div>
                    <button className="main-btn sign-form__btn" type="submit">Sign Up</button>
                </Form>
            </Formik>
            {
                errorInfo && <ErrorInfo errorInfo={errorInfo} />
            }
        </>
    )
}

export default SignUpForm;
