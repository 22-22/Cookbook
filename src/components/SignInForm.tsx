import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../redux/actionCreators';
import hiddenInput from '../assets/icons/hidden-input.png';
import './SignForms.css';
interface SignInValues {
    email: "",
    password: "",
}

export const SignInForm = () => {
    const dispatch = useDispatch();
    // const errorInfo = useSelector((state: RootStateOrAny) => state.errorInfo)

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
                    <Field className="sign-form__input" id="email" name="email" />
                    <div className="sign-form__label-block">
                        <label className="sign-form__label" htmlFor="password">Password</label>
                        <Link className="sign-form__link" to="">Forgot password?</Link>
                    </div>
                    <div className="sign-form__input-block">
                        <Field className="sign-form__input" id="password" name="password" />
                        <img className="sign-form__icon" src={hiddenInput} alt="hidden" />
                    </div>
                    <button className="sign-form__btn" type="submit">Sign In</button>
                </Form>
            </Formik>
            {/* {errorInfo &&
            <div className="sign-form__error-info">
                {errorInfo}
            </div>} */}
        </>
    )
}
