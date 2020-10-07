import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
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
  public btnAction: BtnI;
  public amountValue = 100000;

  constructor(private clientService : ClientsService) { }

  ngOnInit(): void {
    this.initButtons();
    this.headers = ['Id', 'Name', 'CA', 'Comment', 'TVA', 'Total TTC','State']
    this.clientService.fetchClients.subscribe(clientsList => {
      this.clientsCollection = clientsList;
    })
  }

  public changeState(client: Client, event): void {
    this.clientService.changeState(client, event.target.value).subscribe(data => client.state = data.state)
  }

  public initButtons() {
    this.btnAction = { label: 'Filter', action: true };
  }

  public filter(): void {
    this.clientService.getUserWithCaGreatherThan(this.amountValue).subscribe(
      filteredClients => this.clientsCollection = filteredClients
    )
  }
}
