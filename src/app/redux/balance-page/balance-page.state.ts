export interface BalancePageState {
    cardNumber: string;
    balance: string;
    isCardNumberSubmitted: boolean;
    hasError: boolean;
}

export const initialState: BalancePageState = {
    cardNumber: '',
    balance: '',
    isCardNumberSubmitted: false,
    hasError: false,
};
