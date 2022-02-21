import { combineReducers } from "redux";
import { userDataReducer } from "./userDataReducer/userDataReducer";
import { recipeReducer } from "./recipeReducer/recipeReducer";

export default combineReducers({
    user: userDataReducer,
    recipe: recipeReducer
})