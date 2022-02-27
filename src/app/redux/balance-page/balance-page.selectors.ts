import { createFeatureSelector, createSelector } from '@ngrx/store';

import { BalancePageState } from './balance-page.state';

export const rootSelector = createFeatureSelector<BalancePageState>('balancePage');

const getCardNumber = createSelector(
  rootSelector,
  (state: BalancePageState): string => state.cardNumber && state.cardNumber
);

const getBalance = createSelector(
  rootSelector,
  (state: BalancePageState): string => state.balance
);

const getIsCardNumberSubmitted = createSelector(
  rootSelector,
  (state: BalancePageState): boolean => state.isCardNumberSubmitted
);

export const Selectors = {
    getCardNumber,
    getBalance,
    getIsCardNumberSubmitted
};
