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

const getHasError = createSelector(
  rootSelector,
  (state: BalancePageState): boolean => state.hasError
);

const selectIsBalanceEmpty = createSelector(
    getBalance,
    (balance): boolean => balance === ''
);

const selectIsCardNumberSubmittedSuccessfully = createSelector(
    getIsCardNumberSubmitted,
    getHasError,
    selectIsBalanceEmpty,
    (isCardSubmitted, hasError, isBalanceEmpty): boolean => isCardSubmitted && !hasError && !isBalanceEmpty
  );

const selectHasNoBalance = createSelector(
    getIsCardNumberSubmitted,
    selectIsBalanceEmpty,
    getHasError,
    (isCardSubmitted, isBalanceEmpty, hasError): boolean => isCardSubmitted && isBalanceEmpty && !hasError
  );

export const Selectors = {
    getCardNumber,
    getBalance,
    getIsCardNumberSubmitted,
    getHasError,
    selectIsBalanceEmpty,
    selectIsCardNumberSubmittedSuccessfully,
    selectHasNoBalance
};
