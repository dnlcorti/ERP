import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { AccessDeniedPageComponent } from './access-denied-page.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'denied', component: AccessDeniedPageComponent }
];
