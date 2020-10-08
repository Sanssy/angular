import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableLightComponent } from './components/table-light/table-light.component';
import { SharedModule } from '../shared/shared.module';
import { TableDarkComponent } from './components/table-dark/table-dark.component';
import { TableStripedComponent } from './components/table-striped/table-striped.component';
import { TitlesAComponent } from './components/titles-a/titles-a.component';
import { TitlesBComponent } from './components/titles-b/titles-b.component';



@NgModule({
  declarations: [TableLightComponent, TableDarkComponent, TableStripedComponent, TitlesAComponent, TitlesBComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableLightComponent,
    TableDarkComponent,
    TableStripedComponent,
    TitlesAComponent,
    TitlesBComponent
  ]
})
export class TemplatesModule { }
