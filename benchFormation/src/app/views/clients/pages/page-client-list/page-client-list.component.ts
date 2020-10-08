import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  public clientsCollectionObservable: Observable<Client[]>;
  public states = Object.values(StateClient);
  public btnIcon: BtnI;
  public btnRoute: BtnI;
  public amountValue = 100000;
  public filtering: boolean;
  public title: string ;
  public subtitle: string ;

  constructor(private clientService : ClientsService) { }

  ngOnInit(): void {
    this.title = 'Clients';
    this.subtitle = 'List of clients';
    this.filtering = false;
    this.initButtons();
    this.headers = ['Id', 'Name', 'CA', 'Comment', 'TVA', 'Total TTC','State'];
    this.initClients();
  }

  public changeState(client: Client, event: any): void {
    this.clientService.changeState(client, event.target.value).subscribe(data => client.state = data.state).unsubscribe();
  }

  public initButtons(): void {
    this.btnRoute = { label: 'Add a client', route: 'add' };
    this.btnIcon = { label: 'Filter', icon: true};
  }

  public initClients(): void {
    this.clientsCollectionObservable = this.clientService.fetchClients;
  }

  public filter(): void {
    if (!this.filtering) {
      this.clientsCollectionObservable = this.clientService.getUserWithCaGreatherThan(this.amountValue);
    } else {
      this.initClients();
    }
    this.filtering = !this.filtering
  }
}
