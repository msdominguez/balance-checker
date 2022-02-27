import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as Actions from './balance-page.actions';
import { Selectors } from './balance-page.selectors';
import { BalancePageState } from './balance-page.state';

@Injectable({ providedIn: 'root' })
export class BalancePageAdapter {
  constructor(private store: Store<BalancePageState>) {}

  getBalance(): Observable<string> {
    return this.store.select(Selectors.getBalance);
  }

  getCardNumber(): Observable<string> {
    return this.store.select(Selectors.getCardNumber);
  }

  getIsCardNumberSubmitted(): Observable<boolean> {
    return this.store.select(Selectors.getIsCardNumberSubmitted);
  }

  submitCardNumber(): void {
    this.store.dispatch(Actions.submitCardNumber());
  }

  updateCardNumber(cardNumber: string): void {
    this.store.dispatch(Actions.updateCardNumber({ cardNumber }));
  }

  updateBalance(balance: string): void {
    this.store.dispatch(Actions.updateBalance({ balance }));
  }
}
