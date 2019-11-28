import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ProductsService } from '../../../products/services';
import * as productsActions from './products.actions';
import * as routerActions from './../router';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {
  }

  getProducts$ = createEffect(() => this.actions$
    .pipe(
      ofType(productsActions.loadProducts),
      switchMap(() => this.productsService.getProducts$()),
      map(data => productsActions.loadProductsSuccess({data})),
      catchError(() => of(productsActions.loadProductsFailure({
        error: 'Load products failed.'
      })))
    ));

  updateProduct$ = createEffect(() => this.actions$
    .pipe(
      ofType(productsActions.updateProduct),
      switchMap(({product}) => this.productsService.editProduct(product)),
      map(product => productsActions.updateProductSuccess({product})),
      catchError(() => of(productsActions.updateProductFailure({
        error: 'Update product failed.'
      })))
    ));

  addProduct$ = createEffect(() => this.actions$
    .pipe(
      ofType(productsActions.addProduct),
      switchMap(({product}) => this.productsService.addProduct(product)),
      map(product => productsActions.addProductSuccess({product})),
      catchError(() => of(productsActions.addProductFailure({
        error: 'Add product failed.'
      })))
    ));

  addUpdateProductSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(
      productsActions.addProductSuccess,
      productsActions.updateProductSuccess
    ),
    map(() => routerActions.go({
        path: ['./admin/products']
      })
    )));
}
