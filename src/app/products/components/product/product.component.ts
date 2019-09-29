import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductModel } from '../../models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product: ProductModel;

  @Output()
  addToCart: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onBuy(): void {
    console.log(`I want to buy ${this.product.name}`);
    this.addToCart.emit();
  }

}
