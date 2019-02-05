import axios from 'axios';
import * as actions from './Actions';

export const loadRecipes = () => dispatch => {

    dispatch(actions.setIsFetchingRecipes());

    return axios.get('/recipes-server')
        .then( response => {
            dispatch( actions.loadRecipes(response.data) )
        })
}

export const addRecipe = recipe => {
    return actions.addRecipe(recipe)
}

export const updateRecipe = recipe => {
    return actions.updateRecipe(recipe);
}

export const removeRecipe = recipe => {
    return actions.removeRecipe(recipe)
}