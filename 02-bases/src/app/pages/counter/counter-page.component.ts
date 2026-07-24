
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button {
       padding: 5px;
       margin: 5px 10px;
       width: 75px;
      }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 10;
  CounterSignal = signal(10);

  constructor() {
    setInterval(() => {
      // this.counter += 1;
      this.CounterSignal.update((V) => V + 1);
      console.log('Tick');
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
   // this.CounterSignal.set(this.CounterSignal() + value);
   this.CounterSignal.update((current) => current + value);
  }


  resetCounter() {
    this.counter = 0;
    this.CounterSignal.set(0);
  }
}
