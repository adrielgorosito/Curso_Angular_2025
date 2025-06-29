import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Yamcha', power: 499 },
    { id: 4, name: 'Piccolo', power: 3000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0 ) return;

    const c: Character = {
      id: this.characters.length + 1,
      name: this.name(),
      power: this.power()
    }

    this.characters.update((list) => [...list, c]);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
