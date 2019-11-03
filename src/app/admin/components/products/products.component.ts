import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductModel, ProductsService } from '../../../products';

@Component({
  selector: 'sh-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ProductModel[]> = this.productsService.getProducts$();

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

}
