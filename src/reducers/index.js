import { combineReducers } from 'redux'
import book from './book'
import cart from './cart'
import order from './order'
const rootReducer = combineReducers({
    book,
    cart,
    order
})

export default rootReducer