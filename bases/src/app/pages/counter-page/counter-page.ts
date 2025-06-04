import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,  // Desactiva ZoneJs
})
export class CounterPage {
  counter = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      // this.counter += 1;
      this.counterSignal.update((v) => v + 1);
      console.log("Tick");
    }, 2000)
  }

  changeBy(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue) => currentValue + value);
  }

  resetCounter() {
    this.counter = 10;
    this.counterSignal.set(10);
  }

}
