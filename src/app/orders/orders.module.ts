import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { components } from './components';
import { ordersFeatureKey, ordersReducer } from '../core/store/';
import { OrdersEffects } from '../core/store/orders/orders.effects';

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    StoreModule.forFeature(ordersFeatureKey, ordersReducer),
    EffectsModule.forFeature([OrdersEffects])
  ]
})
export class OrdersModule { }
