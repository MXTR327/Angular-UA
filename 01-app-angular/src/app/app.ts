import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { MensajeService } from '@shared/services/mensaje.service';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
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
