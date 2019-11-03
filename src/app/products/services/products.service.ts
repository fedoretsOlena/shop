import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProductModel, ProductModel } from '../models';

import { products } from '../mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: IProductModel[] = [ ...products ];

  constructor() {
  }

  getProducts$(): Observable<ProductModel[]> {
    return of(this.products)
      .pipe(
        map((items: IProductModel[]) => {
          return items.map(product => new ProductModel(product));
        })
      );
  }

  getProduct$(id: number): Observable<ProductModel> {
    return of(this.products)
      .pipe(
        map((items: IProductModel[]) => items.find(product => product.id === id)),
        map(product => new ProductModel(product))
      );
  }

  addProduct(product: IProductModel): void {
    product.id = +new Date();

    this.products.push(product);
  }

  editProduct(product: IProductModel): void {
    const inx = this.products.findIndex(i => i.id === product.id);

    this.products[inx] = { ...this.products[inx], ...product };
  }
}
