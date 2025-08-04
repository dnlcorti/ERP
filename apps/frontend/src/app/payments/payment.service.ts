import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Payment {
  id: number;
  clientId: number;
  productId: number;
  amount: number;
  payDate: string;
  note?: string;
}

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private http: HttpClient) {}
  all(): Observable<Payment[]> {
    return this.http.get<Payment[]>('/payments');
  }
}
