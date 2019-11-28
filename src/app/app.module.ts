import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { components } from './components';

import { CoreModule, httpInterceptorProviders } from './core';
import { ProductsModule } from './products';
import { CartModule } from './cart';
import { SharedModule } from './shared';
import { OrdersModule } from './orders/orders.module';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,

    CoreModule,
    CartModule,
    SharedModule,
    ProductsModule,
    OrdersModule,

    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
