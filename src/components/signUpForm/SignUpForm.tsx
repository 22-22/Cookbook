import React, { useEffect, useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../redux/actionCreators";
import { SignUpValues } from "../../tsTypes";
import hiddenInput from "../../assets/icons/hidden-input.png";
import shownInput from "../../assets/icons/shown-input.png";
import "../SignForms.css";

const errTryAgain = "Please try again.";
const errDiffPasswords = `Error: Passwords differ. ${errTryAgain}`;
const errNoPassword = "Please enter your password.";

function SignUpForm() {
    const dispatch = useDispatch();
    const [errorInfo, setErrorInfo] = useState("");
    const [hidden, setHidden] = useState({
        password: true,
        confirmedPassword: true
    });
    const errorFromFirebase = useSelector((state: RootStateOrAny) => state.errorInfo);

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
                        <Field type={hidden.password ? "password" : "text"}
                            className="sign-form__input" id="password" name="password" />
                        <button type="button" onClick={() => togglePasswordHidden("password")}>
                            <img className="sign-form__icon" src={hidden.password ? hiddenInput : shownInput} alt="hidden" />
                        </button>
                    </div>
                    <label className="sign-form__label" htmlFor="confirmedPassword">Confirm Password</label>
                    <div className="sign-form__input-block">
                        <Field type={hidden.confirmedPassword ? "password" : "text"}
                            className="sign-form__input" id="confirmedPassword" name="confirmedPassword" />
                        <button type="button" onClick={() => togglePasswordHidden("confirmedPassword")}>
                            <img className="sign-form__icon" src={hidden.confirmedPassword ? hiddenInput : shownInput} alt="hidden" />
                        </button>
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
