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

    // Get with filter by state
    public getFilterByState(state: StateOrder): Observable<Order[]> {
      return this.http.get<Order[]>(`${this.urlApi}orders`).pipe(
        map(datas => datas
          .filter(data => data.state == state)
            .map ( filteredData => new Order(filteredData))
          )
      )
    }

    // update
    public update(order: Order): Observable<Order> {
      return this.http.put<Order>(`${this.urlApi}orders/${order.id}`, order);
    }

    // update changeState
    public changeState(order: Order, state: StateOrder): Observable<Order> {
      const obj = new Order({...order});
      obj.state = state;
      return this.update(obj)
    }

    public changeOrderState(id: number, state: StateOrder): Observable<Order> {
      const order = this.getById(id);
      return this.http.put<Order>(`${this.urlApi}orders/${id}`, {...order, state});
    }
}
