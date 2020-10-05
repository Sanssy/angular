import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageClientListComponent } from './views/clients/pages/page-client-list/page-client-list.component';
import { PageHomeComponent } from './views/home/page-home/page-home.component';
import { PageListOrdersComponent } from './views/orders/pages/page-list-orders/page-list-orders.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
