import { BASE_URL } from '../api';

describe('Api', () => {
    it('has BAS_URL', () => {
        expect(BASE_URL).toEqual('http://localhost:3004');
    })
})