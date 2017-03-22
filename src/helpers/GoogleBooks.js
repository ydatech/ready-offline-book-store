import axios from 'axios';




///volumes?q=isbn%3A1491929006&key=AIzaSyCgzfUh72QRi9YcrRoV40iii_qXpozR3hU
export const BASE_URL = 'https://www.googleapis.com/books/v1/';
export const API_KEY = 'AIzaSyCgzfUh72QRi9YcrRoV40iii_qXpozR3hU'
//axios.defaults.baseURL = BASE_URL;
//axios.defaults.adapter = httpAdapter;

export const fetchBookInfo = (isbn) => {

    return axios.get('volumes', { params: { q: `isbn:${isbn}`, key: API_KEY }, baseURL: BASE_URL }).then((response) => {

        return Promise.resolve(response.data)
    }).catch((error) => {
        return Promise.reject(error)
    })
}