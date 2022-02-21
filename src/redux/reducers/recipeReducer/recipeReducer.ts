import * as actionTypes from "../../actionTypes/recipeActionTypes";
import * as commonActionTypes from "../../actionTypes/commonActionTypes";
import { openRecipeModal, closeRecipeModal, addNewRecipeToState } from "./recipeReducerHandlers";
import { setError } from "../commonReducerHandlers";
import { reducerFactory } from "../reducerUtils";

const initialState = {
    isCreateRecipeModalOpen: false,
    recipeData: [],
    errorInfo: ""
};

const handlers = {
    [actionTypes.OPEN_RECIPE_MODAL]: openRecipeModal,
    [actionTypes.CLOSE_RECIPE_MODAL]: closeRecipeModal,
    [actionTypes.CREATE_RECIPE_SUCCEEDED]: addNewRecipeToState,
    [actionTypes.CREATE_RECIPE_FAILED]: setError,
    [commonActionTypes.ADD_DOC_FIRESTORE_FAILED]: setError,
}

export const recipeReducer = reducerFactory(initialState, handlers);