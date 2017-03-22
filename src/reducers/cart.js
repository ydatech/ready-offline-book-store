import { ADD_TO_CART, RESET_CART } from '../actions/BookActions';
const initialState = {
    items: []
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                items: [
                    ...state.items,
                    action.item
                ]
            }
        case RESET_CART:
            return { ...initialState }
        default:
            return state
    }
}

export default cart