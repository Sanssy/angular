import { Component, OnInit } from '@angular/core';
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
  public section: string;

  constructor(
    private orderService: OrdersService
  ) { }

  ngOnInit(): void {
    this.section = 'orders';
    this.headers = ['Id', 'Type','Client', 'Nb jours', 'TJM HT', 'Total HT', 'Total TTC', 'Date','Etat'];
    this.orderService.collection.subscribe(orders => {
      this.collectionOrders = orders;
      console.log(this.collectionOrders);
    });
  }

}
