import { createAction, props } from '@ngrx/store';

export const updateCardNumber = createAction('[Balance Page] Update card number', props<{ cardNumber: string }>());
export const submitCardNumber = createAction('[Balance Page] Submit card number');
export const getBalanceSuccess = createAction('[Balance Page] Get balance success');
export const getBalanceFailure = createAction('[Balance Page] Get balance failure');
export const updateBalance = createAction('[Balance Page] Update balance', props<{ balance: string }>());
