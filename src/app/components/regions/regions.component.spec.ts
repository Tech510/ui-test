import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RegionsComponent } from './regions.component';
import { Store } from '@ngrx/store';
import { GetCountriesAction } from 'src/app/actions/countries.action';
import { DropdownListComponent } from '../dropdown-list/dropdown-list.component';
import { CountryDetailsComponent } from '../country-details/country-details.component';

const initialState = {
  countrieBasedOnRegion: {
    countries: null
  }
};

describe('RegionsComponent', () => {
  let component: RegionsComponent;
  let fixture: ComponentFixture<RegionsComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({initialState})
      ],
      declarations: [
        RegionsComponent, DropdownListComponent, CountryDetailsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(RegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch an event to get countries details', () => {
    const spy = spyOn(store, 'dispatch');
    component.getCountries('asia');
    expect(spy).toHaveBeenCalledWith(GetCountriesAction({region: 'asia'}));
  });

  it('should return selected country details', () => {
    component.countries = [{
      name: 'USA',
      capital: 'Washington',
      population: '6000000',
      currencies: [{
        symbol: '$'
      }],
      flag: 'http://www.flag'
    }];
    component.getCountryDetails('USA');
    expect(component.selectedCountry).toEqual(component.countries[0]);
  });
});
