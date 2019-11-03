import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from '../../models';

@Component({
  selector: 'sh-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input()
  product: ProductModel;

  @Input()
  isRowDirection = false;

  @Output()
  addToCart: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  onBuy(): void {
    this.addToCart.emit();
  }
}
