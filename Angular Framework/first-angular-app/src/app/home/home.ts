import { Component, signal } from '@angular/core';
import { Greeting } from '../component/greeting/greeting';
import { Counter } from '../component/counter/counter';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  homemessage = signal('omg');

  keyUpHandler(event: KeyboardEvent){
    console.log('user type ${event.key} key');
  }
}
