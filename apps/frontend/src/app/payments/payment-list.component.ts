import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentService, Payment } from './payment.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  template: `
    <h3 i18n>Payments</h3>
    <button pButton label="Add" class="p-mb-2"></button>
    <p-table [value]="payments$ | async">
      <ng-template pTemplate="header">
        <tr><th>Client</th><th>Amount</th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-payment>
        <tr><td>{{payment.clientId}}</td><td>{{payment.amount}}</td></tr>
      </ng-template>
    </p-table>
  `
})
export class PaymentListComponent implements OnInit {
  payments$!: Observable<Payment[]>;
  constructor(private service: PaymentService) {}
  ngOnInit() {
    this.payments$ = this.service.all();
  }
}
