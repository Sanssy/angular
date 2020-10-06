import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public section: string;

  constructor(private clientsService : ClientsService) { }

  ngOnInit(): void {
    this.section = 'clients';
    this.headers = ['Id', 'Name', 'CA', 'Comment', 'TVA', 'Total TTC','State']
    this.clientsService.fetchClients.subscribe(clientsList => {
      this.clientsCollection = clientsList;
      console.log(this.clientsCollection);
    })
  }
}
