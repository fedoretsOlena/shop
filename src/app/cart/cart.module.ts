import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent, CartItemComponent, CartListComponent } from './components';

import { SharedModule } from '../shared';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   CartComponent,
   CartItemComponent,
   CartListComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,

    SharedModule,
    RouterModule
  ]
})
export class CartModule { }
