import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './numbers-page.html',
  styleUrl: './numbers-page.css',
})
export default class NumbersPage {
  totalSells = signal(2123456.5567);
  percent = signal(0.4856);
}
