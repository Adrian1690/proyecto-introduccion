const initialState = {
    isFetching: false,
    items: [
        /* {
            id: 1,
            title: 'Recipe1',
            category: 'category1',
            chef: 'checf1',
            description: 'This is a description of recipe'
        },
        {
            id: 2,
            title: 'Recipe2',
            category: 'category2',
            chef: 'checf2',
            description: 'This is a description of recipe'
        },
        {
            id: 3,
            title: 'Recipe3',
            category: 'category3',
            chef: 'checf3',
            description: 'This is a description of recipe'
        } */
    ]
};

const RecipesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_ISFETCHING_RECIPES':
            return {
                ...state,
                isFetching: true
            }
        case 'LOAD_RECIPES':
            return {
                ...state,
                isFetching: false,
                items: action.items
            };
        case 'ADD_RECIPE':
            return {
                ...state,
                items: [
                    action.item,
                    ...state.items
                ]
            }
        case 'UPDATE_RECIPE':
            return {
                ...state,
                items: state.items.map(item => item.id === action.item.id ? action.item : item)
            }
        case 'REMOVE_RECIPE':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.item.id)
            }
        default:
            return state;
    }
}

export default RecipesReducer;