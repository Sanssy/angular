import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { TemplatesModule } from 'src/app/templates/templates.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormAddOrderComponent } from './components/form-add-order/form-add-order.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';


@NgModule({
  declarations: [PageListOrdersComponent, FormAddOrderComponent, PageAddOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplatesModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class OrdersModule { }
