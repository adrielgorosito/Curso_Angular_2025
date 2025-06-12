import { JsonPipe } from '@angular/common';
import { Component, inject, signal, computed, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './country-page.html',
  styleUrl: './country-page.css',
})
export class CountryPage {
  private fb = inject(FormBuilder);
  private countryService = inject(CountryService);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  });

  regions = signal(this.countryService.regions);
  countriesByRegion = signal<Country[]>([]);
  borders = signal<Country[]>([]);

  onFormChanged = effect((onCleanup) => {
    const regionSuscription = this.onRegionChanged();
    const countrySuscription = this.onCountryChanged();

    onCleanup(() => {
      regionSuscription.unsubscribe();
      countrySuscription.unsubscribe();
    });
  });

  onRegionChanged() {
    return this.myForm
      .get('region')!
      .valueChanges.pipe(
        tap(() => {
          this.myForm.get('country')!.setValue('');
          this.myForm.get('border')!.setValue('');
          this.countriesByRegion.set([]);
          this.borders.set([]);
        }),
        switchMap((region) => {
          return this.countryService.getCountriesByRegion(region!);
        })
      )
      .subscribe((countries) => {
        this.countriesByRegion.set(countries);
      });
  }

  onCountryChanged() {
    return this.myForm
      .get('country')!
      .valueChanges.pipe(
        tap(() => {
          this.myForm.get('border')!.setValue('');
          this.borders.set([]);
        }),
        filter((value) => value!.length > 0),
        switchMap((alphaCode) => {
          return this.countryService.getCountryByAlphaCode(alphaCode!);
        }),
        switchMap((country) => {
          return this.countryService.getCountryNamesByCodeArray(
            country.borders
          );
        })
      )
      .subscribe((borders) => {
        this.borders.set(borders);
      });
  }
}
