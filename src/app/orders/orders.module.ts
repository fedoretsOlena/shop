import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { components } from './components';
import { OrdersEffects, ordersFeatureKey, ordersReducer } from '../core/store/';
import { SharedModule } from '../shared';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(ordersFeatureKey, ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),

    SharedModule,

    OrdersRoutingModule
  ]
})
export class OrdersModule {
}
