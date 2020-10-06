import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/shared/models/order.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pCollection: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(
    private http: HttpClient
  ) {
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`)
   }


  // Get
    public get collection(): Observable<Order[]> {
      return this.pCollection;
    }

  // Set
    public set collection(collection: Observable<Order[]>){
      this.pCollection = collection
    }
}
