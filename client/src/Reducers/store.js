import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import recipes from './RecipesReducer';

const AppReducer = combineReducers({
    recipes
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducer, /* preloadedState, */ composeEnhancers(
    //applyMiddleware(thunk, epicMiddleware)
    applyMiddleware(thunk)
));

export default store;


