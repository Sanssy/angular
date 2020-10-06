import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-client-list',
  templateUrl: './page-client-list.component.html',
  styleUrls: ['./page-client-list.component.scss']
})
export class PageClientListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 1. Create observable
    const datas = new Observable(obs => {
      obs.next('Test');
      obs.next('Test2');
      obs.complete();
    })
    // 2. Observable Subscription
    datas.subscribe({
      next: value => (console.log(value)),
      complete: () => console.log('End observable')
    })
  }

}
