import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { Dialog, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeRecipeModalAction, createRecipeAction } from "../../../redux/actionCreators/recipeActionCreators";
import { selectUserId } from "../../../redux/selectors/userSelectors";
import { selectModalStatus, selectRecipeData, selectRecipeError } from "../../../redux/selectors/recipeSelectors";
import closeIcon from "../../../assets/icons/close.png";
import { ErrorInfo } from "../../common/ErrorInfo";
import "./CreateRecipeModal.css";

const initialState = {
    title: "",
    activeIngredient: "",
    description: "",
    directions: "",
    imageFile: {}
};

export const CreateRecipeModal = () => {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(selectModalStatus);
    const recipeError = useSelector(selectRecipeError);
    const recipeFromStore = useSelector(selectRecipeData);
    const id = useSelector(selectUserId);
    const [recipeData, setRecipeData] = useState(initialState);
    const [ingredients, setIngredients] = useState<Array<string>>([]);
    const [image, setImage] = useState("");

    useEffect(() => {
        clearForm();
    }, [recipeFromStore]);

    const handleInputTextarea = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target;
        setRecipeData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSelect = (evt: SelectChangeEvent) => {
        const { name, value } = evt.target;
        setRecipeData((prevState) => ({
            ...prevState,
            [name]: value
        }));
        setIngredients((prevState) => [...prevState, value]);
    };
    const handleFileInput = (evt: ChangeEvent<HTMLInputElement>) => {
        if (evt.target.files) {
            const file = evt.target.files[0];
            setImage(URL.createObjectURL(file));
            setRecipeData((prevState) => ({
                ...prevState,
                imageFile: file
            }));
        }
    };
    const deleteImage = () => {
        setImage("");
        setRecipeData((prevState) => ({
            ...prevState,
            imageFile: {}
        }));
    };
    const deleteOption = (clickedIdx: number) => {
        setIngredients(ingredients.filter((_, idx) => idx !== clickedIdx));
    };
    const clearForm = () => {
        setRecipeData(initialState);
        setIngredients([]);
        setImage("");
    }
    const handleClose = () => {
        clearForm();
        dispatch(closeRecipeModalAction());
    };
    const saveRecipe = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const { title, description, directions, imageFile } = recipeData;
        const textData = {
            title, description, directions, ingredients
        };
        const payload = {
            id,
            data: textData,
            file: imageFile,
            collectName: "users",
            subcollectName: "recipes"
        };
        dispatch(createRecipeAction(payload));
    };

    return (
        <Dialog className="recipe-modal" open={isModalOpen}>
            <h1 className="recipe-modal__title">Create New Recipe</h1>
            <form className="recipe-form" action="" method="post"
                encType="multipart/form-data" onSubmit={saveRecipe}>
                <label className="recipe-form__label recipe-form__label--title" htmlFor="title">Recipe Title</label>
                <input className="recipe-form__input" type="text"
                    name="title" id="title"
                    value={recipeData.title} onChange={handleInputTextarea}
                    placeholder="Title" required />
                <div className="recipe-form__img-block">
                    <label className="recipe-form__label--recipeImg main-btn" htmlFor="recipeImg">
                        <input className="recipe-form__input--upload" type="file" onChange={handleFileInput}
                            name="recipeImg" id="recipeImg" accept="image/*" />
                        Upload Recipe Image
                    </label>
                    {image && <>
                        <img className="img-block__image" src={image} alt="dish" />
                        <button className="recipe-form__delete-btn" type="button" onClick={deleteImage}>
                            <img src={closeIcon} alt="close" />
                        </button>
                    </>
                    }
                </div>
                <label className="recipe-form__label" htmlFor="description">Description</label>
                <textarea className="recipe-form__input recipe-form__textarea"
                    value={recipeData.description} onChange={handleInputTextarea}
                    name="description" id="description" placeholder="Title"></textarea>
                <InputLabel id="select-label">Ingredients</InputLabel>
                <Select
                    className="recipe-form__select"
                    labelId="select-label"
                    name="activeIngredient"
                    value={recipeData.activeIngredient}
                    onChange={handleSelect}
                >
                    <MenuItem value={"First Ingredient, 100g"}>First Ingredient, 100g</MenuItem>
                    <MenuItem value={"Second Ingredient, 200g"}>Second Ingredient, 200g</MenuItem>
                    <MenuItem value={"Third Ingredient, 1400g"}>Third Ingredient, 1400g</MenuItem>
                </Select>
                {(ingredients.length > 0) &&
                    <div className="recipe-form__options-view-block">
                        {ingredients.map((ingred, idx) => (
                            <div key={idx} className="recipe-form__options-view">
                                <span>{ingred}</span>
                                <button className="recipe-form__delete-btn" type="button" onClick={() => deleteOption(idx)}>
                                    <img src={closeIcon} alt="close" />
                                </button>
                            </div>
                        ))}
                    </div>}
                <label className="recipe-form__label" htmlFor="directions">Directions</label>
                <textarea className="recipe-form__input recipe-form__textarea"
                    value={recipeData.directions} onChange={handleInputTextarea}
                    name="directions" id="directions" placeholder="Directions"></textarea>
                <div className="recipe-form__btn-block">
                    <button className="recipe-form__btn outlined-btn" type="button" onClick={handleClose}>Cancel</button>
                    <button
                        className={`recipe-form__btn main-btn ${recipeData.title ? "" : "btn--disabled"}`}
                        type="submit"
                    >Confirm</button>
                </div>
            </form>
            {recipeError && (
                <ErrorInfo errorInfo={recipeError} />
            )}
        </Dialog>
    );
}
