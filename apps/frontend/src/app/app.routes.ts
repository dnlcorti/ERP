import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { RoleGuard } from './auth/role.guard';

export const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
  },
  {
    path: 'users',
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['ADMIN'] },
    loadChildren: () => import('./users/users.routes').then(m => m.USERS_ROUTES)
  },
  {
    path: 'clients',
    canActivate: [AuthGuard],
    loadChildren: () => import('./clients/clients.routes').then(m => m.CLIENTS_ROUTES)
  },
  {
    path: 'products',
    canActivate: [AuthGuard],
    loadChildren: () => import('./products/products.routes').then(m => m.PRODUCTS_ROUTES)
  },
  {
    path: 'payments',
    canActivate: [AuthGuard],
    loadChildren: () => import('./payments/payments.routes').then(m => m.PAYMENTS_ROUTES)
  },
  {
    path: 'reports',
    canActivate: [AuthGuard],
    loadChildren: () => import('./reports/reports.routes').then(m => m.REPORTS_ROUTES)
  },
  { path: '', pathMatch: 'full', redirectTo: 'reports' },
  { path: '**', redirectTo: 'reports' }
];
