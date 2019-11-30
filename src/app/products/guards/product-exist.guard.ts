import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { AppState, getProductsEntities, go } from '../../core/store';
import { checkStore } from './check-store.function';

@Injectable({
  providedIn: 'root'
})
export class ProductExistGuard implements CanActivate {
  constructor(private store: Store<AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        const id = +route.paramMap.get('productID');
        return this.hasProduct(id);
      })
    );
  }

  private hasProduct(id: number): Observable<boolean> {
    return this.store.pipe(
      select(getProductsEntities),
      map(tasks => !!tasks[id]),
      tap(result => {
        if (!result) {
          this.store.dispatch(go({path: ['/home']}));
        }
      }),
      take(1)
    );
  }
}
