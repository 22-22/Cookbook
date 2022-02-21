import * as tsTypes from "../../../tsTypes";

export const openRecipeModal = (state: tsTypes.IRecipeState) => {
    return {
        ...state,
        isCreateRecipeModalOpen: true
    }
};

export const closeRecipeModal = (state: tsTypes.IRecipeState) => {
    return {
        ...state,
        errorInfo: "",
        isCreateRecipeModalOpen: false,
    }
};

export const addNewRecipeToState = (
    state: tsTypes.IRecipeState, action: tsTypes.ICreateRecipeSuccessAction
) => {
    return {
        recipeData: [...state.recipeData, action.payload.data],
        errorInfo: "",
        isCreateRecipeModalOpen: false
    }
};
