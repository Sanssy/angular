import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
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
    this.collection = this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
      map(datas => datas.map(obj => new Order(obj)))
    )
   }


  // Get
    public get collection(): Observable<Order[]> {
      return this.pCollection;
    }

  // Set
    public set collection(collection: Observable<Order[]>){
      this.pCollection = collection
    }

    // Get by Id
    public getById(id_order: number): Observable<Order> {
      return this.http.get<Order>(`${this.urlApi}orders/${id_order}`)
      // return this.http.get<Order>(`${this.urlApi}orders?id=${id_order}&`)
    }

    // Get by State
    public getByState(state_order: StateOrder): Observable<Order[]> {
      // return this.http.get<Order[]>(`${this.urlApi}orders`)
      return this.http.get<Order[]>(`${this.urlApi}orders?state=${state_order}`)
    }

    // Get by State & typePresta
    public getByStateAndTypePresta(state_order: StateOrder, typePresta?: string): Observable<Order[]> {
      return this.http.get<Order[]>(`${this.urlApi}orders?state=${state_order}&typePresta=${typePresta}`)
    }
}
