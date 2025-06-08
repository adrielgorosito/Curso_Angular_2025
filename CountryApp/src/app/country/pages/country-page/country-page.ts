import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
  countryService = inject(CountryService);
  location = inject(Location);

  countryCode = inject(ActivatedRoute).snapshot.params['code'];

  countryResource = rxResource({
    params: () => ({ code: this.countryCode }),
    stream: ({ params }) => {
      return this.countryService.getCountryByCode(params.code);
    },
  });

  goback() {
    this.location.back();
  }
}
