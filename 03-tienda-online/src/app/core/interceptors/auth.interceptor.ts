import { type HttpInterceptorFn, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '@core/services/login.service';

export const authInterceptor: HttpInterceptorFn = (req, next) =>
{
  const token = inject(LoginService).token;
  if (!token) return next(req);

  const params = (req.params ?? new HttpParams()).set('auth', token);

  const newReq = req.clone({ params });

  return next(newReq);
};
