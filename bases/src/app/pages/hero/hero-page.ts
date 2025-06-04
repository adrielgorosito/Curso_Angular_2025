import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe]
})
export class HeroPage {
  name = signal('Ironman');
  age = signal(45);

  readOnlyHeroDescription = computed(() => {
    const desc = `${ this.name() } - ${ this.age()}`;
    return desc;
  })  // Señal computada: es readOnly

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge() {
    this.age.set(60);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
