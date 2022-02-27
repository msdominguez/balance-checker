import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AccountBalanceService } from '@services/account-balance.service';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as BalancePageActions from './balance-page.actions';
import { BalancePageAdapter } from './balance-page.adapter';

@Injectable({ providedIn: 'root' })
export class BalancePageEffects {
  constructor(
    private actions$: Actions<Action>,
    private balancePageAdapter: BalancePageAdapter,
    private accountBalanceService: AccountBalanceService
  ) {}

  getBalance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BalancePageActions.submitCardNumber),
      concatMap((action: Action) =>
        of(action).pipe(withLatestFrom(this.balancePageAdapter.getCardNumber()))
      ),
      switchMap(([action, cardNumber]: [Action, string]) => {
        return this.accountBalanceService.fetchBalance(cardNumber).pipe(
          map((balance: string) => BalancePageActions.getBalanceSuccess({ balance })),
          catchError(() => of(BalancePageActions.getBalanceFailure()))
        );
      })
    )
  );

  updateBalance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BalancePageActions.getBalanceSuccess),
      concatMap((action: any) => of(action).pipe(map(a => a.balance))),
      map((balance) => BalancePageActions.updateBalance({ balance })),
    )
  );
}
