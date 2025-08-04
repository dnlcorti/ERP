import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';
import { catchError, switchMap, throwError } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);
  const access = auth.getAccessToken();
  const authReq = access
    ? req.clone({ setHeaders: { Authorization: `Bearer ${access}` } })
    : req;
  return next(authReq).pipe(
    catchError((err) => {
      if (err.status === 401) {
        return auth.refresh().pipe(
          switchMap(() => {
            const retryReq = auth.getAccessToken()
              ? authReq.clone({
                  setHeaders: { Authorization: `Bearer ${auth.getAccessToken()}` }
                })
              : authReq;
            return next(retryReq);
          })
        );
      }
      return throwError(() => err);
    })
  );
};
