import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(
    private http: HttpClient
  ) { }

  getCountriesDetails(region: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/region/${region}`)
      .pipe(
        map((response: any[]) => response.map((country) => ({
          name: country.name,
          capital: country.capital,
          population: country.population,
          currencies: country.currencies,
          flag: country.flag
        })))
      )
  }

}
