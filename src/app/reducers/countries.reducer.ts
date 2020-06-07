import { createReducer, on, Action } from "@ngrx/store";
import { CountriesAction } from '../actions/countries.action';
import { CountriesState } from '../models/countries.model';

const initialState: CountriesState = {
    countries: null
}

const countriesReducer = createReducer(
    initialState,
    on(CountriesAction, (state, { countries }: CountriesState) => ({...state, countries}))
);

export function reducer(state: CountriesState, action: Action): CountriesState {
    return countriesReducer(state, action);
}