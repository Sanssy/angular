import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';

import { PageClientListComponent } from './pages/page-client-list/page-client-list.component';

const routes: Routes = [
  { path: '', component: PageClientListComponent },
  { path: 'add', component: PageAddClientComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
