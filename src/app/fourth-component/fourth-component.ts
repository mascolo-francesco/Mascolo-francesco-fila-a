import { Component } from '@angular/core';
import { QuintoComponenete } from '../quinto-componenete/quinto-componenete';

@Component({
  selector: 'app-fourth-component',
  imports: [QuintoComponenete],
  templateUrl: './fourth-component.html',
  styleUrl: './fourth-component.css',
})
export class FourthComponent {
  mascolo = 'quarto';
}
