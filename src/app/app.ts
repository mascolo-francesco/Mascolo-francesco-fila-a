import { Component, signal } from '@angular/core';
import { SecondComponent } from './second-component/second-component';

@Component({
  selector: 'app-root',
  imports: [SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mascolo-francesco-fila-a');
  tuo_cognome = 'app';
}
