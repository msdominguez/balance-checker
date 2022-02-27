import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { concatMap, map, withLatestFrom } from 'rxjs/operators';

import * as BalancePageActions from './balance-page.actions';
import { BalancePageAdapter } from './balance-page.adapter';

@Injectable({ providedIn: 'root' })
export class BalancePageEffects {
  constructor(
      private actions$: Actions<Action>,
      private balancePageAdapter: BalancePageAdapter
      ) {}

  // call api here
  getBalance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BalancePageActions.submitCardNumber),
      concatMap((action: Action) => of(action).pipe(withLatestFrom(this.balancePageAdapter.getCardNumber()))),
      map(([_, cardNumber]: [Action, string]) => BalancePageActions.updateBalance({ balance: cardNumber }))
    )
  );
}
