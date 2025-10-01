import { Component, signal } from '@angular/core';
import { ListadoProductosComponent } from '@core/components/listado-productos/listado-productos.component';

@Component({
  selector: 'app-root',
  imports: [ListadoProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  protected readonly titulo = signal('Tienda Online');
}
