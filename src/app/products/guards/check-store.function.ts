import { select } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';

import { getProductsLoaded, loadProducts } from '../../core/store';

export function checkStore(store): Observable<boolean> {
  return store.pipe(
    select(getProductsLoaded),
    tap((loaded: boolean) => {
      if (!loaded) {
        store.dispatch(loadProducts());
      }
    }),
    filter((loaded: boolean) => loaded),
    take(1)
  );
}
