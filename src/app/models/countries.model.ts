export interface Country {
    name: string;
    capital?: string;
    population?: string;
    currencies?: any;
    flag?: string;
}

export interface CountriesState {
    countries: Country[] | null;
}
