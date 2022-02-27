export interface BalancePageState {
    cardNumber: string;
    balance: string;
    isCardNumberSubmitted: boolean;
}

export const initialState: BalancePageState = {
    cardNumber: '',
    balance: '0',
    isCardNumberSubmitted: false
};
