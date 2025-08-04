import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService, User } from './user.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [TableModule, ButtonModule],
  template: `
    <h3 i18n>Users</h3>
    <button pButton label="Add" class="p-mb-2"></button>
    <p-table [value]="users$ | async">
      <ng-template pTemplate="header">
        <tr><th>Email</th><th>Role</th></tr>
      </ng-template>
      <ng-template pTemplate="body" let-user>
        <tr><td>{{user.email}}</td><td>{{user.role}}</td></tr>
      </ng-template>
    </p-table>
  `
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;
  constructor(private service: UserService) {}
  ngOnInit() {
    this.users$ = this.service.all();
  }
}
