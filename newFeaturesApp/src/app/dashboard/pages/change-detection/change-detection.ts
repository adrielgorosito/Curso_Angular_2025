import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Title } from '../../../shared/title/title';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  imports: [Title, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="Change detection"></app-title>
    <pre>{{ frameworkAsSignal() | json }} </pre>
    <pre>{{ frameworkAsProperty | json }} </pre>
  `,
})
export default class ChangeDetection {
  public frameworkAsSignal = signal({ name: 'Angular', releaseDate: 2016 });
  public frameworkAsProperty = { name: 'Angular', releaseDate: 2016 };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update((value) => {
        return {
          ...value,
          name: 'React',
        };
      });
    }, 3000);
  }
}
