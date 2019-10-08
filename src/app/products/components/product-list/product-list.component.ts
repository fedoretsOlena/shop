import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductModel } from '../../models';

import { ProductsService } from '../../services';
import { CartService } from '../../../cart/services';

@Component({
  selector: 'sh-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<ProductModel[]>;

  constructor(private productsService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts$();
  }

  onAddProductToCart(product: ProductModel): void {

    const p = {...product, price: product.sale ? product.newPrice : product.price};
    this.cartService.addProduct(p);
  }

}
