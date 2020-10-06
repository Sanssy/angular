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

}
