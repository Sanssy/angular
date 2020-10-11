import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { ControlService } from './core/services/control.service';
import { PageHomeComponent } from './views/home/page-home/page-home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: PageHomeComponent },
  { path: 'home/:connected', component: PageHomeComponent },
  { path: 'login', loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule) },
  { path: 'users', canActivate: [ControlService], loadChildren: () => import('./views/users/users.module').then(u => u.UsersModule) },
  { path: 'orders', canActivate: [ControlService], loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'clients', canActivate: [ControlService], loadChildren: () => import('./views/clients/clients.module').then(m => m.ClientsModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true, // default
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  // constructor(router: Router){
  //   const replacer = (key, value) => typeof value === 'function' ? value.name : value ;
  //   console.log('Routes', JSON.stringify(router.config, replacer, 1));

  // }
}
