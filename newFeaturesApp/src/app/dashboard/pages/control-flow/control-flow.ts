import { Component, signal } from '@angular/core';
import { Title } from '../../../shared/title/title';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  imports: [Title],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export default class ControlFlow {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworksEmpty = signal([]);

  public toggleContent() {
    this.showContent.set(!this.showContent());
  }
}
