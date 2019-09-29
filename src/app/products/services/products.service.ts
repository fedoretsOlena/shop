import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProductModel, ProductModel } from '../models';

import { products } from '../mocks';

@Injectable()
export class ProductsService {

  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    return of(products)
      .pipe(
        map((items: IProductModel[]) => {
          return items.map(product => new ProductModel(product));
        })
      );
  }
}
