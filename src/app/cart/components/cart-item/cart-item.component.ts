import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { CartProductModel } from '../../models';

@Component({
  selector: 'sh-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input()
  product: CartProductModel;

  @Output()
  delete: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  changeCount: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onIncreaseCount(count: number): void {
    this.changeCount.emit(++count);
  }

  onDecreaseCount(count: number): void {
    this.changeCount.emit(--count);
  }

  onDelete(): void {
    this.delete.emit();
  }
}
