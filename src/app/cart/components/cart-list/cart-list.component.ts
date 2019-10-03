import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CartProductModel } from '../../models';

@Component({
  selector: 'sh-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
  @Input()
  cartProducts: CartProductModel[];

  @Output()
  delete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  changeCount: EventEmitter<{ id: number, count: number }> = new EventEmitter<{ id: number, count: number }>();

  constructor() { }

  onDelete(id: number): void {
    this.delete.emit(id);
  }

  onChangeCount(count: number, id: number): void {
    if (count === 0) {
      this.onDelete(id);
      return;
    }

    this.changeCount.emit({ id, count });
  }
}
