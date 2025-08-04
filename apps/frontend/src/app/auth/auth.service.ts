import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private accessToken = signal<string | null>(null);
  private refreshToken = signal<string | null>(null);
  readonly role = signal<'ADMIN' | 'MANAGER' | null>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http
      .post<{ accessToken: string; refreshToken: string; role: string }>(
        '/auth/login',
        { email, password }
      )
      .pipe(
        tap((res) => {
          this.accessToken.set(res.accessToken);
          this.refreshToken.set(res.refreshToken);
          this.role.set(res.role as any);
        })
      );
  }

  logout() {
    this.accessToken.set(null);
    this.refreshToken.set(null);
    this.role.set(null);
  }

  getAccessToken() {
    return this.accessToken();
  }

  refresh() {
    return this.http
      .post<{ accessToken: string; refreshToken: string }>(
        '/auth/refresh',
        { token: this.refreshToken() }
      )
      .pipe(
        tap((res) => {
          this.accessToken.set(res.accessToken);
          this.refreshToken.set(res.refreshToken);
        })
      );
  }
}
