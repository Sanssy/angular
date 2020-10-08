import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    TextsModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule { }
