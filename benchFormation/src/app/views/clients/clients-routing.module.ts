import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageClientListComponent } from './pages/page-client-list/page-client-list.component';

const routes: Routes = [
  { path: '', component: PageClientListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
