import { NEW_ORDER_CREATED, FETCH_ORDER_SUCCESS } from '../actions/BookActions';
const initialState = {
    items: []
}

const order = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDER_SUCCESS:
            return {
                ...state, ...{ items: action.data, isFetching: false }
            }
        case NEW_ORDER_CREATED:
            return {
                items: [
                    ...state.items,
                    action.item
                ]
            }

        default:
            return state
    }
}

export default order