import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientListComponent } from './pages/page-client-list/page-client-list.component';
import { TemplatesModule } from 'src/app/templates/templates.module';


@NgModule({
  declarations: [
    PageClientListComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule
  ]
})
export class ClientsModule { }
