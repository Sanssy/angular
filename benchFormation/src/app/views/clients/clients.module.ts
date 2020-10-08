import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientListComponent } from './pages/page-client-list/page-client-list.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { FormAddClientComponent } from './components/form-add-client/form-add-client.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PageClientListComponent,
    FormAddClientComponent,
    PageAddClientComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplatesModule,
    SharedModule,
    IconsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
