import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { first, map, withLatestFrom } from 'rxjs/operators';

import { CartProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductsSink: BehaviorSubject<CartProductModel[]> = new BehaviorSubject([]);

  get cartProducts$(): Observable<CartProductModel[]> {
    return this.cartProductsSink.asObservable();
  }

  totalCount$ = this.cartProducts$
    .pipe(
      map((products: CartProductModel[]) => {
        return products.reduce((total, product) => total + product.count, 0);
      })
    );

  totalAmount$ = this.cartProducts$
    .pipe(
      map((products: CartProductModel[]) => products.reduce((total, product) => {
          return total + product.count * (product.sale ? product.newPrice : product.price);
        }, 0)
      )
    );

  addProduct(product: CartProductModel): void {

    of(product)
      .pipe(
        withLatestFrom(this.cartProducts$),
        map(([newProduct, products]) => {
            const index = products
              .findIndex(item => item.id === newProduct.id);

            if (index !== -1) {
              const newProducts = [...products];

              newProducts[index] = { ...newProducts[index], count: ++newProducts[index].count };
              return newProducts;
            }

            return [...products, {...newProduct, count: 1}];
          }
        ),
      ).subscribe(products => this.updateCartProducts(products as CartProductModel[]));
  }

  deleteProduct(id: number): void {

    of(id)
      .pipe(
        withLatestFrom(this.cartProducts$),
        map(([productId, products]) => products
          .filter(product => product.id !== productId))
      ).subscribe(products => this.updateCartProducts(products));
  }

  deleteAll(): void {
    this.updateCartProducts([]);
  }

  changeProductCount(id: number, count: number): void {
    of(id)
      .pipe(
        withLatestFrom(this.cartProductsSink),
        map(([ , products]) => {
          const newProducts = [...products];

          newProducts
            .find(product => product.id === id)
            .count = count;

          return newProducts;
        }),
        first()
      ).subscribe((products) => this.updateCartProducts(products));
  }

  private updateCartProducts(products: CartProductModel[]): void {
    this.cartProductsSink.next(products);
  }
}
