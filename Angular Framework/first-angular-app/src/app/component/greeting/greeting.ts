import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: false,
  templateUrl: './greeting.html',
  styleUrl: './greeting.css',
})
export class Greeting {
  message = signal('hhh');

}
