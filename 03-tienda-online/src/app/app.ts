import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoProductosComponent } from "./components/listado-productos/listado-productos.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListadoProductosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('Tienda Online');
}
