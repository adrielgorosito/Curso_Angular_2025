import { Component } from '@angular/core';
import { Title } from '../../../shared/title/title';

@Component({
  selector: 'app-view-transition1',
  imports: [Title],
  template: `
    <app-title title="View Transition 1"></app-title>

    <section class="flex justify-start">
      <img
        srcset="https://picsum.photos/id/237/200/300"
        alt="photo"
        width="200"
        height="300"
        style="view-transition-name: dog1"
      />

      <div
        class="bg-blue-500 w-56 h-56"
        style="view-transition-name: box1"
      ></div>
    </section>
  `,
})
export default class ViewTransition {}
