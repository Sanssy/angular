import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav/icon-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconAccessibleComponent } from './icon-accessible/icon-accessible.component';
import { IconViewComponent } from './icon-view/icon-view.component';
import { IconSignoutComponent } from './icon-signout/icon-signout.component';
import { IconFilterComponent } from './icon-filter/icon-filter.component';
import { IconAddComponent } from './icon-add/icon-add.component';
import { IconTemplateComponent } from './icon-template/icon-template.component';
import { IconWarningComponent } from './icon-warning/icon-warning.component';


@NgModule({
  declarations: [
    IconNavComponent,
    IconEditComponent,
    IconAccessibleComponent,
    IconViewComponent,
    IconSignoutComponent,
    IconFilterComponent,
    IconAddComponent,
    IconTemplateComponent,
    IconWarningComponent
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
    IconSignoutComponent,
    IconFilterComponent,
    IconAddComponent,
    IconWarningComponent
  ]
})
export class IconsModule { }
