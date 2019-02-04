const initialState = {
    isFetching: false,
    items: [
        {
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
        }
    ]
};

const RecipesReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOAD_RECIPES':
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export default RecipesReducer;