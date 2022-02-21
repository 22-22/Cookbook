import { RootStateOrAny } from 'react-redux';

export const selectModalStatus = (state: RootStateOrAny) => state.recipe.isCreateRecipeModalOpen;
export const selectRecipeData = (state: RootStateOrAny) => state.recipe.recipeData;
export const selectRecipeError = (state: RootStateOrAny) => state.recipe.errorInfo;
