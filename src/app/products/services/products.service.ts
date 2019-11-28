import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { ApiConfig } from '../../core';
import { IProductModel, ProductModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly tasksUrl = ApiConfig.PRODUCTS_URL;

  constructor(
    private http: HttpClient
  ) {
  }

  getProducts$(): Observable<ProductModel[]> {
    return this.http.get(this.tasksUrl)
      .pipe(
        delay(1000),
        map((items: IProductModel[]) => {
          return items.map(product => new ProductModel(product));
        })
      );
  }

  getProduct$(id: number): Observable<ProductModel> {
    return this.http.get(this.tasksUrl + id)
      .pipe(
        map((product: IProductModel) => new ProductModel(product))
      );
  }

  addProduct(product: IProductModel): Observable<ProductModel> {
    product.id = +new Date();

    return this.http.post(this.tasksUrl, product)
      .pipe(
        map((res: IProductModel) => new ProductModel(res))
      );
  }

  editProduct(product: IProductModel): Observable<ProductModel> {
    return this.http.put(`${this.tasksUrl}${product.id}`, product)
      .pipe(
        map((res: IProductModel) => new ProductModel(res))
      );
  }
}
