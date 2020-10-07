import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ClientI } from 'src/app/shared/interfaces/client-i';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-client-list',
  templateUrl: './page-client-list.component.html',
  styleUrls: ['./page-client-list.component.scss']
})
export class PageClientListComponent implements OnInit {

  public headers: string[];
  public clientsCollection: Client[];
  public states = Object.values(StateClient);

  constructor(private clientService : ClientsService) { }

  ngOnInit(): void {
    this.headers = ['Id', 'Name', 'CA', 'Comment', 'TVA', 'Total TTC','State']
    this.clientService.fetchClients.subscribe(clientsList => {
      this.clientsCollection = clientsList;
    })
  }

  changeState(client: Client, event): void {
    this.clientService.changeState(client, event.target.value).subscribe(data => {
      console.log('Before', client.state);
      client.state = data.state;
      console.log('After', client.state);

    })
  }
}
