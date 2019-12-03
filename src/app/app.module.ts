import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { components } from './components';

import { CoreModule, httpInterceptorProviders } from './core';
import { ProductsModule } from './products';
import { CartModule } from './cart';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ...components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    CoreModule,
    CartModule,
    SharedModule,
    ProductsModule,

    AppRoutingModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
