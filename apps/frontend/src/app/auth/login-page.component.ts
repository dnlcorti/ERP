import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, InputTextModule, PasswordModule, ButtonModule],
  template: `
    <div class="p-fluid" i18n>
      <h2>Login</h2>
      <form (ngSubmit)="submit()">
        <input type="email" pInputText [(ngModel)]="email" name="email" placeholder="Email" />
        <p-password [(ngModel)]="password" name="password" [feedback]="false" placeholder="Password"></p-password>
        <button type="submit" pButton label="Login"></button>
      </form>
    </div>
  `
})
export class LoginPageComponent {
  email = '';
  password = '';
  constructor(private auth: AuthService) {}
  submit() {
    this.auth.login(this.email, this.password).subscribe();
  }
}
