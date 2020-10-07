import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order.model';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  public headers: string[];
  public collectionOrders: Order[];
  public states = Object.values(StateOrder);

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.headers = ['Id', 'Type','Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Date','Etat'];
    this.orderService.collection.subscribe(orders => {
      this.collectionOrders = orders;
    });
    // this.orderService.getFilterByState(StateOrder.OPTION).subscribe(orders => this.collectionOrders = orders);
  }

  public changeState(order: Order, event): void {
    this.orderService.changeState(order, event.target.value).subscribe(data => {
      console.log('Before', order.state);
      order.state = data.state;
      console.log('After', order.state);
    })
  }

}
