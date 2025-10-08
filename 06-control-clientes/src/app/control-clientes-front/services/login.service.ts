import { inject, Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService
{
  #auth = inject(Auth);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAuthState(): Observable<any>
  {
    return authState(this.#auth);
  }

  login(email: string, password: string)
  {
    return new Promise((resolve, reject) =>
    {
      signInWithEmailAndPassword(this.#auth, email, password)
        .then(datos => resolve(datos))
        .catch(error => reject(error));
    });
  }

  logout()
  {
    this.#auth.signOut();
  }
}
