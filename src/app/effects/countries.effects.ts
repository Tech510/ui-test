import { Actions, Effect, ofType } from "@ngrx/effects"
import { Injectable } from '@angular/core';
import { CountriesAction, GetCountriesAction } from '../actions/countries.action';
import { map, switchMap } from 'rxjs/operators';
import { CountriesService } from '../service/countries.service';
import { Store } from '@ngrx/store';
import { Country } from '../models/countries.model';

@Injectable()
export class CountriesEffects {
    constructor(
        private actions$: Actions,
        private countriesService: CountriesService,
        private store: Store
    ) {}

    @Effect({dispatch: false})
    getCountiresUpdate$ = this.actions$
        .pipe(
            ofType(GetCountriesAction),
            switchMap((action) => this.countriesService.getCountriesDetails(action.region)),
            map((countries: Country[]) => this.store.dispatch(CountriesAction({countries}))
            )
        );
}