import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pClients: Observable<Client[]>;
  private urlApi = environment.urlApi;


  constructor(private http: HttpClient) {
    this.fetchClients = this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map(clientsList => clientsList.map(clientToMap => new Client(clientToMap)))
    )
   }

   public get fetchClients(): Observable<Client[]> {
     return this.pClients;
   }

   public set fetchClients(clients: Observable<Client[]>) {
     this.pClients = clients;
   }

   // Client : get By Id + get By State
   public getClient(client_id: number): Observable<Client> {
     return this.http.get<Client>(`${this.urlApi}clients/${client_id}`)
   }

   public getClientByState(client_state: StateClient): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}clients?state=${client_state}`)
  }

  public update(client: Client) {
    return this.http.put<Client>(`${this.urlApi}clients/${client.id}`, client);
  }

  public changeState(client: Client, state: StateClient): Observable<Client> {
    const obj = new Client({...client});
    obj.state = state;
    return this.update(obj);
  }

  public getUserWithCaGreatherThan(amount: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.urlApi}clients`).pipe(
      map(clientsList => clientsList
        .filter( cl => cl.ca < amount)
        .map(clientToMap => new Client(clientToMap)))
    )
  }

  public add(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}clients`, client)
  }

  public edit(client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}clients/${client.id}`, client);
  }

  public delete(id: number): Observable<Client[]> {
    this.http.delete<Client[]>(`${this.urlApi}clients/${id}`);
    return this.pClients;
  }
}
