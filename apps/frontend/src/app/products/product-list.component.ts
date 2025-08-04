import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService, Product } from './product.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  template: `
    <h3 i18n>Products</h3>
    <button pButton label="Add" class="p-mb-2"></button>
    <p-table [value]="products$ | async">
      <ng-template pTemplate="header">
        <tr><th>Name</th><th>Premium</th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-product>
        <tr><td>{{product.name}}</td><td>{{product.premium}}</td></tr>
      </ng-template>
    </p-table>
  `
})
export class ProductListComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private service: ProductService) {}
  ngOnInit() {
    this.products$ = this.service.all();
  }
}
