import { Component, input } from '@angular/core';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterListComponent {
  listName = input.required<string>();
  characters = input.required<Character[]>();
}
