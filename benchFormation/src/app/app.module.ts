import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from './ui/ui.module';
import { TextsModule } from './texts/texts.module';
import { IconsModule } from './icons/icons.module';
import { CoreModule } from './core/core.module';
import { OrdersComponent } from './views/orders/orders.component';
import { PageListOrdersComponent } from './views/orders/pages/page-list-orders/page-list-orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    PageListOrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UiModule,
    TextsModule,
    IconsModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
