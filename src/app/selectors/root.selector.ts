import { createSelector } from '@ngrx/store';

export const selectCounties = (state: any) => state.countrieBasedOnRegion;

export const selectCountriesType = createSelector(
    selectCounties,
    state => state.countries
);
