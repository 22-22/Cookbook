import React from "react";
import hiddenInput from "../../assets/icons/hidden-input.png";
import shownInput from "../../assets/icons/shown-input.png";
import "../SignForms.css"

interface ShowHidePasswordBtnProps {
    togglePasswordHidden: Function,
    isPasswordHidden: Boolean,
    inputType?: string
};

export const ShowHidePasswordBtn = (
    { togglePasswordHidden, isPasswordHidden, inputType }: ShowHidePasswordBtnProps
) => {
    const handleClick = () => {
        if (inputType) {
            togglePasswordHidden(inputType);
        } else {
            togglePasswordHidden();
        }
    }
    return <button className="sign-form__btn--eye" type="button" onClick={handleClick}>
        <img src={isPasswordHidden ? hiddenInput : shownInput} alt="hidden" />
    </button>;
};
