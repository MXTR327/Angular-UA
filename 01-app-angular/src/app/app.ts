import { Component, inject } from '@angular/core';
import { EjemploPipesComponent } from "@core/components/ejemplo-pipes/ejemplo-pipes.component";
import { ListadoUsuariosComponent } from '@core/components/listado-usuarios/listado-usuarios.component';
import { MensajeService } from '@shared/services/mensaje.service';
import { TitleService } from '@shared/services/title.service';


@Component({
  selector: 'app-root',
  imports: [ListadoUsuariosComponent, EjemploPipesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  // Servicios en Angular
  #mensajeService = inject(MensajeService);
  mensaje = this.#mensajeService.obtenerMensaje();

  #titleService = inject(TitleService);
  protected readonly title = this.#titleService.title;
}
