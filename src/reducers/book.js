import { FETCH_BOOK_SUCCESS, FETCH_BOOK_START, FETCH_BOOK_FAILED, BOOK_CREATED } from '../actions/BookActions';

const initialState = {
    items: []
}

const book = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_BOOK_SUCCESS:
            return {
                ...state, ...{ items: action.data, isFetching: false }
            }
        case BOOK_CREATED:
            return {
                ...state,
                ...{
                    items: [
                        ...state.items,
                        action.data
                    ]
                }
            }
        default:
            return state
    }
}

export default book;