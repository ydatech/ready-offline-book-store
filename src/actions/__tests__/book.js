import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
//import * as actions from '../../actions/TodoActions'
//import * as types from '../../constants/ActionTypes'
//import moxios from 'moxios';
import nock from 'nock';
import * as BookActions from '../BookActions'
import { BASE_URL } from '../api'
import httpAdapter from 'axios/lib/adapters/http'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Book Actions', () => {
    /*
    beforeEach(function () {
        moxios.install()
    });

    afterEach(function () {
        moxios.uninstall()
    });
    */
    afterEach(() => {
        nock.cleanAll()
    })

    it('fetches books items', () => {
        /*
        moxios.stubRequest(BASE_URL + '/books', {
            status: 200,
            response: { books: [{ id: 1, title: "title" }] }
        });
        */
        nock(BASE_URL)
            .get('/books')
            .reply(200, { books: [{ id: 1, title: "title" }] });

        const expectedActions = [
            { type: BookActions.FETCH_BOOK_START },
            { type: BookActions.FETCH_BOOK_SUCCESS, data: { books: [{ id: 1, title: 'title' }] } }
        ];
        const store = mockStore({ books: [] });

        return store.dispatch(BookActions.fetchBooks())
            .then(() => { // return of async actions
                expect(store.getActions()).toEqual(expectedActions)
            });
    })
})