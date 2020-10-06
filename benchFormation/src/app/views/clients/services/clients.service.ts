import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/shared/models/client.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pClients: Observable<Client[]>;
  private urlApi = environment.urlApi;


  constructor(private http: HttpClient) {
    this.clients = this.http.get<Client[]>(`${this.urlApi}clients`)
   }

   public get clients(): Observable<Client[]> {
     return this.pClients;
   }

   public set clients(clients: Observable<Client[]>) {
     this.pClients = clients;
   }
}
