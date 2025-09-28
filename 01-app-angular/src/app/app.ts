import { Component, signal } from '@angular/core';
import { NuevoComponenteComponent } from './components/nuevo-componente/nuevo-componente.component';
import { ComponenteEnLineaComponent } from './components/componente-en-linea/componente-en-linea.component';
import { InterpolacionComponent } from './components/interpolacion/interpolacion.component';
import { ComponentePadreComponent } from './components/componente-padre/componente-padre.component';
import { ComponenteHijoComponent } from "./components/componente-padre/componente-hijo/componente-hijo.component";
import { MostrarMensajeComponent } from "./components/mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./components/replicador/replicador.component";

@Component({
  selector: 'app-root',
  imports: [
    NuevoComponenteComponent,
    ComponenteEnLineaComponent,
    InterpolacionComponent,
    ComponentePadreComponent,
    ComponenteHijoComponent,
    MostrarMensajeComponent,
    ReplicadorComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  protected readonly title = signal('Property Binding en Angular');
}
