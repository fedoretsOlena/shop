import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { ProductModel } from '../../models';

import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';

@Component({
  selector: 'sh-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  product$: Observable<ProductModel>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {
    const productID = this.route.snapshot.params.productID;

    if (productID) {
      this.product$ = this.productsService.getProduct$(parseInt(productID, 10));
    }
  }

  onAddProductToCart(product: ProductModel): void {
    const p = {...product, price: product.sale ? product.newPrice : product.price};

    this.cartService.addProduct(p);
  }
}
