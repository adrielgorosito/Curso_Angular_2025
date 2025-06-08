import { Component, inject, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';
import { of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, List],
  templateUrl: './by-country-page.html',
  styleUrl: './by-country-page.css',
})
export class ByCountryPage {
  countryService = inject(CountryService);

  query = signal('');

  /* Forma con rxResource */
  countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]); // El 'of' retorna un observable de un array vacío

      return this.countryService.getCountriesByQuery(params.query);
    },
    defaultValue: [],
  });
}
