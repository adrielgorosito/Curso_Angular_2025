import { Component, input } from '@angular/core';
import { ListItem } from './list-item/list-item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gifs-list',
  imports: [ListItem],
  templateUrl: './gifs-list.html',
  styleUrl: './gifs-list.css',
})
export class GifsList {
  gifs = input.required<Gif[]>();
}
