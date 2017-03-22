import axios from 'axios';

import { BASE_URL } from './api';

import httpAdapter from 'axios/lib/adapters/http';

export const FETCH_BOOK_START = 'FETCH_BOOK_START';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILED = 'FETCH_BOOK_FAILED';
export const BOOK_CREATED = 'BOOK_CREATED';
export const ADD_TO_CART = 'ADD_TO_CART';
export const NEW_ORDER_CREATED = 'NEW_ORDER_CREATED';
export const RESET_CART = 'RESET_CART';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILED = 'FETCH_ORDER_FAILED';

axios.defaults.baseURL = BASE_URL;
axios.defaults.adapter = httpAdapter;

export const fetchBooks = () => {

    return (dispatch, getState) => {

        dispatch({
            type: FETCH_BOOK_START
        })

        return axios.get('/books').then((response) => {

            dispatch({
                type: FETCH_BOOK_SUCCESS,
                data: response.data
            });

            return Promise.resolve(response);
        }).catch((error) => {

            dispatch({
                type: FETCH_BOOK_FAILED
            });

            return Promise.reject(error);

        });

    }
}

export const addBook = (bookData) => {
    return (dispatch, getState) => {
        return axios.post('/books', bookData).then((response) => {
            console.log(response)
            dispatch({
                type: BOOK_CREATED,
                data: response.data
            })
            return Promise.resolve(response)
        }).catch((error) => {
            console.log(error)

            return Promise.reject(error)
        })
    }
}

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item
    }
}

export const createNewOrder = (newOrderData) => {

    return (dispatch, getState) => {
        const state = getState()
        return axios.post('/orders', { information: newOrderData, items: state.cart.items }).then((response) => {
            dispatch({
                type: NEW_ORDER_CREATED,
                data: response.data
            })
            dispatch({
                type: RESET_CART

            })
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}


export const fetchOrders = () => {

    return (dispatch, getState) => {



        return axios.get('/orders').then((response) => {

            dispatch({
                type: FETCH_ORDER_SUCCESS,
                data: response.data
            });

            return Promise.resolve(response);
        }).catch((error) => {

            dispatch({
                type: FETCH_ORDER_FAILED
            });

            return Promise.reject(error);

        });

    }
}