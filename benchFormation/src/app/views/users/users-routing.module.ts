import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';

const routes: Routes = [
  {path: '', component: PageListUsersComponent, data: {title: 'Users', subtitle: 'List of users'}},
  {path: 'add', component: PageAddUserComponent, data: {title: 'Users', subtitle: 'Add a user'} }
  // ajouter la page d'ajout de user +
  // faire un control sur le role +
  // ajout de page d'erreur pour le user
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
