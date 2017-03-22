import cart from '../cart';

describe('cart reducers', () => {

    it('should return initial state', () => {
        expect(cart(undefined, {})).toEqual({
            items: []
        })
    })
})