import { ActionReducerMap } from '@ngrx/store';
import { reducer as countriesReducer } from './countries.reducer';

export const reducers: ActionReducerMap<any> = {
    countrieBasedOnRegion: countriesReducer
}