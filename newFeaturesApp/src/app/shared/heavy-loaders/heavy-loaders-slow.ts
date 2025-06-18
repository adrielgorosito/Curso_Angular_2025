import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  imports: [],
  template: `
    <section [class]="['w-full h-[600px]', cssClass()]">
      Heavy Loader Slow
    </section>
  `,
})
export class HeavyLoadersSlow {
  constructor() {
    const start = Date.now();

    while (Date.now() - start < 3000) {}

    console.log('Cargado');
  }

  cssClass = input.required<string>();
}
