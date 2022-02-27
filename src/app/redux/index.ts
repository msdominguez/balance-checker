import { InjectionToken } from '@angular/core';
import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { balancePageReducer } from './balance-page/balance-page.reducer';
import { BalancePageState } from './balance-page/balance-page.state';

export interface AppState {
    balancePage: BalancePageState;
}

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>): (state: S, action: A) => S {
    return (state: S, action: A): S => {
        const nextState = reducer(state, action);
        return nextState;
    };
}

export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];

export const ROOT_REDUCER = new InjectionToken<ActionReducerMap<AppState, Action>>('Root reducers token', {
    factory: () => ({
        balancePage: balancePageReducer,
    })
});
