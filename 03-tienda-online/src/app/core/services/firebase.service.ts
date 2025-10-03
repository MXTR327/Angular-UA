import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth/cordova';
import { Firestore, getFirestore } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService
{
  auth = signal<Auth | null>(null);
  firebase = signal<Firestore | null>(null);

  #firebaseConfig = {
    apiKey: 'AIzaSyD-uGDLrwv58yxb2-xwQMRJ4myPGbEGdMM',
    appId: '1:1092833377567:web:2dcfa070a5305353ec442a',
    authDomain: 'tienda-online-9e05d.firebaseapp.com',
    databaseURL: 'https://tienda-online-9e05d-default-rtdb.firebaseio.com',
    messagingSenderId: '1092833377567',
    projectId: 'tienda-online-9e05d',
    storageBucket: 'tienda-online-9e05d.firebasestorage.app',
  };

  constructor()
  {
    const app = initializeApp(this.#firebaseConfig);
    this.auth.set(getAuth(app));
    this.firebase.set(getFirestore(app));
  }
}
