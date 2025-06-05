import { Component, input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css',
})
export class ListItem {
  imageUrl = input.required<string>();
}
