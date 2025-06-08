import { RESTCountry } from '../interfaces/rest-country.interface';
import { Country } from '../interfaces/country.interface';

export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry) {
    const country: Country = {
      cca2: restCountry.cca2,
      flag: restCountry.flag,
      flagSvg: restCountry.flags.svg,
      name:
        restCountry.translations['spa'].official ?? restCountry.name.official,
      capital: restCountry.capital.join(', '),
      population: restCountry.population,
    };

    return country;
  }

  static mapRestCountriesToCountries(restCountries: RESTCountry[]) {
    const countries: Country[] = restCountries.map(
      this.mapRestCountryToCountry
    );

    return countries;
  }
}
