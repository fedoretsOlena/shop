import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve, Router } from '@angular/router';

import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';

import { IProductModel, ProductModel, ProductsService } from '../../products';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveGuard implements Resolve<ProductModel> {

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    if (!route.paramMap.has('productID')) {
      return of(new ProductModel({} as IProductModel));
    }

    const id = +route.paramMap.get('productID');

    return this.productsService.getProduct$(id)
      .pipe(
        map((product: ProductModel) => {
          if (product) {
            return product;
          } else {
            this.router.navigate(['./admin/products']);
            return null;
          }
        }),
        take(1),
        catchError(() => {
          this.router.navigate(['./admin/products']);
          return of(null);
        })
      );
  }
}
