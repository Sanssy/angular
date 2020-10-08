import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { PageSigninComponent } from './pages/page-signin/page-signin.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PageSigninComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule
  ]
})
export class LoginModule { }
