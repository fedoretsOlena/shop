import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductComponent, ProductListComponent, ProductDetailsComponent } from './components';

const components = [
  ProductComponent,
  ProductListComponent,
  ProductDetailsComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule {}
