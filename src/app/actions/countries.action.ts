import { createAction, props } from '@ngrx/store';
import { CountriesState } from '../models/countries.model';

export const CountriesAction = createAction(
    'Countries',
    props<CountriesState>()
);



export const GetCountriesAction = createAction(
    'GetCountries',
    props<{region: string}>()
);