import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { SharedModule } from '../shared/shared.module';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableStripedComponent } from './components/table-striped/table-striped.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TableStripedComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStripedComponent
  ]
})
export class TemplatesModule { }
