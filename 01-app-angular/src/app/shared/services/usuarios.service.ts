import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '@core/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService
{
  #apiUrl = 'https://jsonplaceholder.typicode.com/users';

  #http = inject(HttpClient);

  obtenerDatos(): Observable<User[]>
  {
    return this.#http.get(this.#apiUrl) as Observable<User[]>;
  }
}
