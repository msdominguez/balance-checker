import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountBalanceService {
  constructor(private http: HttpClient) {}

  fetchBalance(cardNumber: string): Observable<string> {
    const url = 'http://localhost:8080/getBalance';
    return this.http.get<string>(url, { params: { cardNumber: cardNumber || '' }});
  }
}
