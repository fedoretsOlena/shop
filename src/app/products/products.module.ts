import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent, ProductListComponent } from './components';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const components = [
  ProductComponent,
  ProductListComponent
];

@NgModule({
  declarations: [...components, ProductDetailsComponent],
  imports: [CommonModule, RouterModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
