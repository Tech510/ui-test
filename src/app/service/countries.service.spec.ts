import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CountriesService } from './countries.service';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Countries', () => {
    const countries = [{
      name: 'USA',
      capital: 'Washington',
      population: '6000000',
      currencies: [{
        symbol: '$'
      }],
      flag: 'http://www.flag'
    }];
    service.getCountriesDetails('europe')
      .subscribe((resposne) => {
        console.log(resposne);
        expect(resposne).toEqual(countries.map(country => ({ ...country})));
      });

    const req = httpMock.expectOne('https://restcountries.eu/rest/v2/region/europe');
    expect(req.request.method).toBe('GET');
    req.flush(countries);
  });
});
