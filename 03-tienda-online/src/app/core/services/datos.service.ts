import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from '@core/interfaces/producto.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService
{
  #httpClient = inject(HttpClient);
  #url = environment.firebaseConfig.databaseURL;

  agregarProducto(producto: Producto): Observable<object>
  {
    return this.#httpClient.post(`${this.#url}/datos.json`, producto);
  }

  eliminarProducto(llave: string): Observable<object>
  {
    return this.#httpClient.delete(`${this.#url}/datos/${llave}.json`);
  }

  listarProductos(): Observable<Record<string, Producto>>
  {
    return this.#httpClient.get<Record<string, Producto>>(
      this.#url + '/datos.json'
    );
  }

  modificarProducto(producto: Producto, llave: string): Observable<object>
  {
    return this.#httpClient.put(`${this.#url}/datos/${llave}.json`, producto);
  }
}
