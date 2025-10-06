import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth/cordova';

import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService
{
  get token()
  {
    return this.#token();
  }

  #firebaseService = inject(FirebaseService);

  #router = inject(Router);

  #token = signal<null | string>(null);

  isAuthenticated()
  {
    return this.#token() !== null;
  }

  login(email: string, password: string)
  {
    const auth = this.#firebaseService.auth;

    signInWithEmailAndPassword(auth()!, email, password)
      .then(() =>
      {
        auth()!
          .currentUser?.getIdToken()
          .then(token =>
          {
            this.#token.set(token);
            this.#router.navigate(['/']);
          });
      })
      .catch(error =>
      {
        console.error('Error al iniciar sesion: ', error);
      });
  }

  logout()
  {
    const auth = this.#firebaseService.auth();
    auth
      ?.signOut()
      .then(() =>
      {
        this.#token.set(null);
        this.#router.navigate(['/login']);
      })
      .catch(error => console.error('Error Logout: ', error));
  }
}
