import { inject, Injectable, signal } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { ClienteInterface } from '@control-clientes/interfaces/cliente.interface';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  updateDoc,
} from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientesService
{
  clientes = signal<ClienteInterface[]>([]);

  #firestore = inject(Firestore);

  constructor()
  {
    this.loadClients();
  }

  createClient(cliente: ClienteInterface)
  {
    return addDoc(collection(this.#firestore, 'clientes'), cliente);
  }

  deleteClient(id: string)
  {
    const clienteDocRef = doc(this.#firestore, `clientes/${id}`);
    return deleteDoc(clienteDocRef);
  }

  getClientById(id: string): Observable<ClienteInterface | null>
  {
    const clientDocRef = doc(this.#firestore, `clientes/${id}`);
    return docData(clientDocRef, {
      idField: 'id',
    }) as Observable<ClienteInterface>;
  }

  loadClients()
  {
    collectionData(
      query(collection(this.#firestore, 'clientes'), orderBy('nombre', 'asc')),
      { idField: 'id' }
    ).subscribe(res =>
    {
      this.clientes.set(res);
    });
  }

  updateClient(cliente: ClienteInterface)
  {
    const clienteDocRef = doc(this.#firestore, `clientes/${cliente.id}`);
    return updateDoc(clienteDocRef, { ...cliente });
  }
}
