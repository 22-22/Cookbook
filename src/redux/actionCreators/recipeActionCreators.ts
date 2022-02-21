import * as actionTypes from "../actionTypes/recipeActionTypes";

export const openRecipeModalAction = () => {
    return { type: actionTypes.OPEN_RECIPE_MODAL };
};

export const closeRecipeModalAction = () => {
    return { type: actionTypes.CLOSE_RECIPE_MODAL };
};

export const createRecipeAction = (payload: any) => {
    return {
        type: actionTypes.CREATE_RECIPE,
        payload
    }
};

export const createRecipeSucceeded = (payload: object) => {
    return {
        type: actionTypes.CREATE_RECIPE_SUCCEEDED,
        payload
    }
};

export const createRecipeFailed = (payload: {
    errorInfo: string
}) => {
    return {
        type: actionTypes.CREATE_RECIPE_FAILED,
        payload
    }
};