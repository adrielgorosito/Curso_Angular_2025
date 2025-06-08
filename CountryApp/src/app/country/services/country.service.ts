import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, delay, map, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  getCapitalsByQuery(query: string) {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((data) => CountryMapper.mapRestCountriesToCountries(data)),
      catchError((error) => {
        console.log(error);
        return throwError(
          () =>
            new Error(`No se encontró ningún país con la capital '${query}'`)
        );
      })
    );
  }

  getCountriesByQuery(query: string) {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((data) => CountryMapper.mapRestCountriesToCountries(data)),
      delay(1000),
      catchError((error) => {
        return throwError(
          () => new Error(`No se encontró ningún país con el nombre '${query}'`)
        );
      })
    );
  }

  getCountryByCode(code: string) {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((data) => CountryMapper.mapRestCountriesToCountries(data)),
      map((countries) => countries.at(0)),
      catchError((error) => {
        return throwError(
          () => new Error(`No se encontró ningún país con el código '${code}'`)
        );
      })
    );
  }
}
