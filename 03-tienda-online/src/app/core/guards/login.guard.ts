import { inject } from '@angular/core';
import { type CanActivateFn, Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const loginGuard: CanActivateFn = (route, state) =>
{
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isAuthenticated())
  {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
