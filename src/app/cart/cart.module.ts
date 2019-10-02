import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartItemComponent } from './components';

@NgModule({
  declarations: [
   CartComponent,
   CartItemComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
