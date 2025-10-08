import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { type CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginGuard: CanActivateFn = (route, state) =>
{
  const router = inject(Router);
  const auth = inject(Auth);

  return authState(auth).pipe(
    map(auth => !!auth || (router.navigate(['/login']), false))
  );
};
