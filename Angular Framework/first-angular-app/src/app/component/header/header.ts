import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todos } from '../../todos/todos';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = signal('Signal Headerrr');

}
