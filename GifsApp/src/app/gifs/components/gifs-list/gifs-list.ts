import { Component, input } from '@angular/core';
import { ListItem } from './list-item/list-item';

@Component({
  selector: 'app-gifs-list',
  imports: [ListItem],
  templateUrl: './gifs-list.html',
  styleUrl: './gifs-list.css',
})
export class GifsList {
  gifs = input.required<string[]>();
}
