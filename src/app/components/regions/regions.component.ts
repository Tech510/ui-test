import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetCountriesAction } from 'src/app/actions/countries.action';
import { selectCountriesType } from 'src/app/selectors/root.selector';
import { Country } from 'src/app/models/countries.model';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  countries: Country[];
  selectedCountry: Country;
  regions = [
    {name: 'Asia'}, {name: 'Europe'}
  ];

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.pipe(select(selectCountriesType))
      .subscribe((countries) => {
        this.countries = countries;
      });
  }

  getCountries(region: string) {
    this.store.dispatch(GetCountriesAction({region}));
  }

  getCountryDetails(country: string) {
    this.selectedCountry = this.countries.find(c => c.name === country);
  }
}
