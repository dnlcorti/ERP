import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  id: number;
  firstName: string;
  lastName: string;
  taxCode: string;
  phone: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class ClientService {
  constructor(private http: HttpClient) {}
  all(): Observable<Client[]> {
    return this.http.get<Client[]>('/clients');
  }
}
