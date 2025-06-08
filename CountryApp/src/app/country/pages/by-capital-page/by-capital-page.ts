import { Component, inject, input, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { List } from '../../components/list/list';
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, List],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.css',
})
export class ByCapitalPage {
  countryService = inject(CountryService);

  /* Nueva forma con 'resources' */
  query = signal('');

  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if (!params.query) return [];

      return await firstValueFrom(
        this.countryService.getCapitalsByQuery(params.query)
      );
    },
    defaultValue: [],
  });

  /* Forma normal */

  // isLoading = signal(false);
  // isError = signal<string | null>(null);
  // countries = signal<Country[]>([]);

  // onSearch(query: string) {
  //   if (this.isLoading() == true) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   this.countryService.getCapitalsByQuery(query).subscribe({
  //     next: (countries) => {
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(err);
  //     },
  //   });
  // }
}
