// Recipes
export const setIsFetchingRecipes = () => ({type:'SET_ISFETCHING_RECIPES'});
export const loadRecipes = items => ({type:'LOAD_RECIPES', items});
export const addRecipe = item => ({type:'ADD_RECIPE', item});
export const updateRecipe = item => ({type:'UPDATE_RECIPE', item});
export const removeRecipe = item => ({type:'REMOVE_RECIPE', item});
