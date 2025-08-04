import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-reports-dashboard',
  standalone: true,
  imports: [ChartModule, TableModule, CardModule],
  template: `
    <h3 i18n>Reports Dashboard</h3>
    <p-card>
      <p-chart type="bar" [data]="chartData"></p-chart>
    </p-card>
    <p-table [value]="rows"></p-table>
  `
})
export class ReportsDashboardComponent {
  chartData = { labels: [], datasets: [] };
  rows: any[] = [];
}
