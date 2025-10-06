import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  protected readonly titulo = signal('Tienda Online');

  #loginService = inject(LoginService);

  isAuthenticated()
  {
    return this.#loginService.isAuthenticated();
  }

  salir()
  {
    this.#loginService.logout();
  }
}
