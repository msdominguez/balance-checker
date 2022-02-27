import { Component, OnInit } from '@angular/core';
import { BalancePageAdapter } from '@redux/balance-page/balance-page.adapter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.css']
})
export class BalancePageComponent implements OnInit {
  balance$: Observable<string>;
  cardNumber$: Observable<string>;
  isCardNumberSubmitted$: Observable<boolean>;

  constructor(private balancePageAdapter: BalancePageAdapter) { }

  ngOnInit() {
    this.balance$ = this.balancePageAdapter.getBalance();
    this.cardNumber$ = this.balancePageAdapter.getCardNumber();
    this.isCardNumberSubmitted$ = this.balancePageAdapter.getIsCardNumberSubmitted();
  }

  updateCardNumber(event$: any) {
    this.balancePageAdapter.updateCardNumber(event$.currentTarget.value);
  }

  submitCardNumber() {
    this.balancePageAdapter.submitCardNumber();
  }
}
