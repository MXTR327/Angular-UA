import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CalculadoraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  protected readonly title = signal('Aplicacion Calculadora Angular');
}
