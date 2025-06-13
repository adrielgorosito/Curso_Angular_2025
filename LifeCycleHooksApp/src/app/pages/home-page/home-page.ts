import {
  afterEveryRender,
  afterNextRender,
  Component,
  effect,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { Title } from '../../components/title/title';

@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})

// El implements no es obligatorio, solo para indicar al desarrollador que debe implementar el método
export class HomePage implements OnInit, OnDestroy {
  constructor() {
    console.log(
      '1. Constructor: Se crea cuando se navega a la ruta y al salir se destruye. Al volver a la ruta, se crea una nueva instancia.'
    );
  }

  ngOnInit() {
    console.log(
      "2. ngOnInit: Runs once after Angular has initialized all the component's inputs."
    );
  }

  ngOnChanges() {
    console.log(
      "3. ngOnChanges: Runs every time the component's inputs have changed."
    );
  }

  ngDoCheck() {
    console.log(
      '4. ngDoCheck: Runs every time this component is checked for changes.'
    );
  }

  ngAfterContentInit() {
    console.log(
      "5. ngAfterContentInit: Runs once after the component's content has been initialized."
    );
  }

  ngAfterContentChecked() {
    console.log(
      '6. ngAfterContentChecked: Runs every time this component content has been checked for changes.'
    );
  }

  ngAfterViewInit() {
    console.log(
      "7. ngAfterViewInit: Runs once after the component's view has been initialized."
    );
  }

  ngAfterViewChecked() {
    console.log(
      "8. ngAfterViewChecked: Runs every time the component's view has been checked for changes."
    );
  }

  ngOnDestroy() {
    console.log('9. ngOnDestroy: Runs once before the component is destroyed.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    console.log(
      '10. afterNextRender: Runs once the next time that all components have been rendered to the DOM.'
    );
  });

  afterEveryRenderEffect = afterEveryRender(() => {
    console.log(
      '11. afterEveryRender: Runs every time all components have been rendered to the DOM.'
    );
  });

  basicEffect = effect((onCleanup) => {
    console.log('12. Effect: disparar eventos secundarios.');

    onCleanup(() => {
      console.log(
        '13. Effect onCleanup: se ejecuta cuando el componente va a ser destruido.'
      );
    });
  });

  traditionalProperty = 'Adriel';
  signalProperty = signal('Adriel');

  changeTraditional() {
    this.traditionalProperty = 'Adriel Gorosito';
  }

  changeSignal() {
    this.signalProperty.set('Adriel Gorosito');
  }
}
