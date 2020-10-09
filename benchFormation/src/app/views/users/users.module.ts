import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageListUsersComponent } from './pages/page-list-users/page-list-users.component';
import { FormAddUserComponent } from './components/form-add-user/form-add-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageAddUserComponent } from './pages/page-add-user/page-add-user.component';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  declarations: [PageListUsersComponent, FormAddUserComponent, PageAddUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class UsersModule { }
