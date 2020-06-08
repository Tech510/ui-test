import { CountriesEffects } from "./countries.effects";
import { Observable, of } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { reducer as countriesReducer } from '../reducers/countries.reducer';
import { provideMockActions } from '@ngrx/effects/testing'; 
import { GetCountriesAction, CountriesAction } from '../actions/countries.action';
import { hot, cold } from 'jasmine-marbles';
import { CountriesService } from '../service/countries.service';

const countries = [{
    name: 'USA',
    capital: 'Washington',
    population: '6000000',
    currencies: [{
      symbol: '$'
    }],
    flag: 'http://www.flag'
  }];

class MockCountiresService {
    getCountriesDetails(any) {
        return of(countries);
    }
}

describe('CountriesEffects test case', () => {
    let effects: CountriesEffects;
    let actions: Observable<any>;
    let store;
    let service: MockCountiresService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule,
                StoreModule.forRoot({
                    countrieBasedOnRegion: countriesReducer
                })
            ],
            providers: [
                CountriesEffects,
                provideMockActions(() => actions),
                {
                    provide: CountriesService,
                    useClass: MockCountiresService
                }
            ]
        });

        effects = TestBed.inject(CountriesEffects);
        store = TestBed.inject(Store);
        service = TestBed.inject(CountriesService);
    });

    it('should trigger the serive and dispatch an event', () => {
        const spy = spyOn(service, 'getCountriesDetails');
        const storeSpy = spyOn(store, 'dispatch');
        actions = of({type: 'GetCountries', region: 'asia'});
        effects.getCountiresUpdate$.subscribe(() => {
            expect(spy).toHaveBeenCalled();
        });
    });
});