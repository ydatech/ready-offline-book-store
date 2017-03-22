import order from '../order';

describe('order reducers', () => {

    it('should return initial state', () => {
        expect(book(undefined, {})).toEqual({
            items: []
        })
    })
})