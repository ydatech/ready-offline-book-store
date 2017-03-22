import book from '../book';

describe('book reducers', () => {

    it('should return initial state', () => {
        expect(book(undefined, {})).toEqual({
            items: []
        })
    })
})