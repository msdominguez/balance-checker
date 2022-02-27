import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountBalanceService {
  constructor(private location: Location, private http: HttpClient) {}

  fetchBalance(cardNumber: string): Observable<any> {
    const url = this.location.prepareExternalUrl('/getBalance');
    return this.http.get<string>(url, { params: { cardNumber: cardNumber || '' }});
  }
}
