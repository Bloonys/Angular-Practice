import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counterValue = signal(0);
  Increment() {
    this.counterValue.set(this.counterValue() + 1);
  }
  Decrement() {
    this.counterValue.set(this.counterValue() - 1);
  }
  Reset() {
    this.counterValue.set(0);
  }

}
