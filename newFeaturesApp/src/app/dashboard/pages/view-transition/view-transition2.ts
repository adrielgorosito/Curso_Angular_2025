import { Component } from '@angular/core';
import { Title } from '../../../shared/title/title';

@Component({
  selector: 'app-view-transition2',
  imports: [Title],
  template: `
    <app-title title="View Transition 2"></app-title>

    <section class="flex justify-end">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="photo"
        width="200"
        height="300"
        style="view-transition-name: dog1"
      />

      <div
        class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
        style="view-transition-name: box1"
      ></div>
    </section>
  `,
})
export default class ViewTransition2 {}
