import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientService, Client } from './client.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  template: `
    <h3 i18n>Clients</h3>
    <button pButton label="Add" class="p-mb-2"></button>
    <p-table [value]="clients$ | async">
      <ng-template pTemplate="header">
        <tr><th>Name</th><th>Tax Code</th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-client>
        <tr><td>{{client.firstName}} {{client.lastName}}</td><td>{{client.taxCode}}</td></tr>
      </ng-template>
    </p-table>
  `
})
export class ClientListComponent implements OnInit {
  clients$!: Observable<Client[]>;
  constructor(private service: ClientService) {}
  ngOnInit() {
    this.clients$ = this.service.all();
  }
}
