import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('products')) {
      const started = Date.now();

      return next.handle(req).pipe(
        finalize(() => {
          const elapsed = Date.now() - started;

          console.log(`${req.method} "${req.urlWithParams}" in ${elapsed} ms.`);
        })
      );
    }

    return next.handle(req);
  }
}
