import { inject, Injectable, signal } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { ClienteInterface } from '@control-clientes/interfaces/cliente.interface';
import { collection, orderBy, query } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService
{
  get clientes(): Observable<ClienteInterface[]>
  {
    return this.#clientes();
  }

  #clientes = signal<Observable<ClienteInterface[]>>({} as never);

  #firestore = inject(Firestore);

  constructor()
  {
    this.loadClients();
  }

  loadClients()
  {
    this.#clientes.set(
      collectionData(
        query(
          collection(this.#firestore, 'clientes'),
          orderBy('nombre', 'asc')
        ),
        { idField: 'id' }
      ) as Observable<ClienteInterface[]>
    );
  }
}
