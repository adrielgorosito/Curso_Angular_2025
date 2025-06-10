import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { GetColorPipe } from '../../pipes/get-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { GetCreatorPipe } from '../../pipes/get-creator.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { SortByPipe } from '../../pipes/sort-by.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe,
    CanFlyPipe,
    GetColorPipe,
    TitleCasePipe,
    GetCreatorPipe,
    SortByPipe,
  ],
  templateUrl: './custom-page.html',
  styleUrl: './custom-page.css',
})
export default class CustomPage {
  name = signal('Adriel');
  upperCase = signal(true);

  heroes = signal(heroes);

  sortBySignal = signal<keyof Hero | null>(null);
}
