import { reducer, initialState } from "./countries.reducer";
import { CountriesAction } from '../actions/countries.action';

const countries = [{
    name: 'USA',
    capital: 'Washington',
    population: '6000000',
    currencies: [{
      symbol: '$'
    }],
    flag: 'http://www.flag'
  }];

describe('Countries Reducer', () => {
    it('should return initial state', () => {
        const action = {} as any;
        const result = reducer(initialState, action);
        expect(result).toBe(initialState);
    })

    it('should update initial state', () => {
        const action = CountriesAction({countries})
        const result = reducer(initialState, action);
        expect(result).toEqual({countries: countries});
    })
});
