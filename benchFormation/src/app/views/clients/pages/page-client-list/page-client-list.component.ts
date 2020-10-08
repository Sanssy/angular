import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
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
  public btnIcon: BtnI;
  public amountValue = 100000;
  public filtering: boolean;

  constructor(private clientService : ClientsService) { }

  ngOnInit(): void {
    this.filtering = false;
    this.initButtons();
    this.headers = ['Id', 'Name', 'CA', 'Comment', 'TVA', 'Total TTC','State'];
    this.initClients();
  }

  public changeState(client: Client, event): void {
    this.clientService.changeState(client, event.target.value).subscribe(data => client.state = data.state)
  }

  public initButtons() {
    // this.btnAction = { label: 'Filter', action: true };
    this.btnIcon = { label: 'Filter', icon: true};
  }

  public initClients(): void {
    this.clientService.fetchClients.subscribe(clientsList => {
      console.log(clientsList);

      this.clientsCollection = clientsList;
      console.log('collection clients',this.clientsCollection);
    })
  }

  public filter(): void {
    if (!this.filtering) {
      console.log(this.filtering);
      this.clientService.getUserWithCaGreatherThan(this.amountValue).subscribe(filteredClients => this.clientsCollection = filteredClients);
    } else {
      console.log('else', this.filtering);
      this.initClients();
      // this.clientService.fetchClients.subscribe(clientsList => this.clientsCollection = clientsList)
    }
    this.filtering = !this.filtering
  }
}
