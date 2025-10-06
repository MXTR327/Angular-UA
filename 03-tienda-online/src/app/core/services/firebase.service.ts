import { Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
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

  constructor()
  {
    const app = initializeApp(environment.firebaseConfig);
    this.auth.set(getAuth(app));
    this.firebase.set(getFirestore(app));
  }
}
