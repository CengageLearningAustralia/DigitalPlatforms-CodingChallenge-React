//This is our root reducer.

import * as actions from './action'

const initialState = {
    books: []
};

function rootReducer(state = initialState, action) {
    if (action.type === actions.GET_BOOKS) {
        return { books: action.payload }
    }
    return state;
};

export default rootReducer;