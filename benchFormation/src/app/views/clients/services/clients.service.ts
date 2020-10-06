import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
}
