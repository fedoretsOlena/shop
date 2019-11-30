import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent, AdminComponent, ProductFormComponent, OrdersComponent } from './components';
import { ProductResolveGuard } from './guards';
import { CanDeactivateGuard } from '../core/guards';
import { ProductExistGuard, ProductsStatePreloadingGuard } from '../products';

const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [{
    path: 'products',
    component: ProductsComponent,
    canActivate: [ProductsStatePreloadingGuard]
  }, {
    path: 'product',
    children: [{
      path: 'add',
      component: ProductFormComponent,
      canDeactivate: [CanDeactivateGuard]
    }, {
      path: 'edit/:productID',
      resolve: {
        product: ProductResolveGuard
      },
      component: ProductFormComponent,
      canDeactivate: [CanDeactivateGuard],
      canActivate: [ProductExistGuard]
    }]
  }, {
    path: 'orders',
    component: OrdersComponent
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
