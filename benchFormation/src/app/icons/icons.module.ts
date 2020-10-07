import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconAccessibleComponent } from './icon-accessible/icon-accessible.component';
import { IconViewComponent } from './icon-view/icon-view.component';
import { IconSignoutComponent } from './icon-signout/icon-signout.component';


@NgModule({
  declarations: [
    IconNavComponent,
    IconEditComponent,
    IconAccessibleComponent,
    IconViewComponent,
    IconSignoutComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [
    IconNavComponent,
    IconEditComponent,
    IconAccessibleComponent,
    IconViewComponent,
    IconSignoutComponent
  ]
})
export class IconsModule { }
