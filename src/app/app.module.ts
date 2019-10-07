import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent, AboutComponent } from './components';

import { CoreModule } from './core';
import { ProductsModule } from './products';
import { CartModule } from './cart';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    CartModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
