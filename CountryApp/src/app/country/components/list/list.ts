import { Component, input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink, DecimalPipe],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  countries = input.required<Country[] | undefined>();

  errorMessage = input<string | unknown>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);
}
