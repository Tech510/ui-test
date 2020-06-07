import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegionsComponent } from './components/regions/regions.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { DropdownListComponent } from './components/dropdown-list/dropdown-list.component';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from './effects/countries.effects';


@NgModule({
  declarations: [
    AppComponent,
    RegionsComponent,
    CountryDetailsComponent,
    DropdownListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([CountriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
