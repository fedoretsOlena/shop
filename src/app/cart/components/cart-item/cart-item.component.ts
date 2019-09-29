import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartProductModel } from '../../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  product: CartProductModel;

  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  joinValues(arr: string[], separator: string = ', '): string {
    return arr.join(separator);
  }

  onDelete(): void {
    this.delete.emit();
  }
}
