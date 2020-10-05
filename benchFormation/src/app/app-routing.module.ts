import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './views/home/page-home/page-home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'orders', loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'clients', loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
