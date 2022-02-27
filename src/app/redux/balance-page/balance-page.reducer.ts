import { createReducer, on } from '@ngrx/store';

import * as Actions from './balance-page.actions';
import { initialState } from './balance-page.state';

export const balancePageReducer = createReducer(
    initialState,
    on(Actions.updateCardNumber, (state, { cardNumber }) => ({
      ...state,
      cardNumber
    })),
    on(Actions.updateBalance, (state, { balance }) => ({
      ...state,
      balance
    })),
    on(Actions.submitCardNumber, state => ({
      ...state,
      isCardNumberSubmitted: true
    })),
    on(Actions.getBalanceSuccess, state => ({
      ...state,
      hasError: false
    })),
    on(Actions.getBalanceFailure, state => ({
      ...state,
      hasError: true
    })),
  );
