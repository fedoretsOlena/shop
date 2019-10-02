import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { filter, map, withLatestFrom } from 'rxjs/operators';

import { CartProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductsSubject: BehaviorSubject<CartProductModel[]> = new BehaviorSubject([]);

  get cartProductsSink$(): Observable<CartProductModel[]> {
    return this.cartProductsSubject.asObservable();
  }

  addProduct(product: CartProductModel): void {

    of(product)
      .pipe(
        withLatestFrom(this.cartProductsSink$),
        filter(([newProduct, products]) => !products
          .some(item => item.id === newProduct.id)),
        map(([newProduct, products]) => [...products, newProduct])
      ).subscribe(products => this.updateCartProducts(products));
  }

  deleteProduct(id: number): void {

    of(id)
      .pipe(
        withLatestFrom(this.cartProductsSink$),
        map(([productId, products]) => products
          .filter(product => product.id !== productId))
      ).subscribe(products => this.updateCartProducts(products));
  }

  private updateCartProducts(products: CartProductModel[]): void {
    this.cartProductsSubject.next(products);
  }
}
