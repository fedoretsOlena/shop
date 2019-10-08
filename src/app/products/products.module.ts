import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';

const components = [
  ProductComponent,
  ProductListComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
