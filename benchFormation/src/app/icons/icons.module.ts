import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';


@NgModule({
  declarations: [
    IconNavComponent,
    IconEditComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    IconNavComponent,
    IconEditComponent
  ]
})
export class IconsModule { }
