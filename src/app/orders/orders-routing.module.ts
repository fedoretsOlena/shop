import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent, ProcessOrderComponent } from './components';

const routes: Routes = [{
  path: '',
  redirectTo: 'list'
}, {
  path: 'list',
  component: OrderListComponent
}, {
  path: 'process',
  component: ProcessOrderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
