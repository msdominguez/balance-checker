import { Component, OnInit } from '@angular/core';
import { BalancePageAdapter } from '@redux/balance-page/balance-page.adapter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-balance-page',
  templateUrl: './balance-page.component.html',
  styleUrls: ['./balance-page.component.css']
})
export class BalancePageComponent implements OnInit {
  cardNumber$: Observable<string>;
  isCardNumberSubmitted$: Observable<boolean>;

  constructor(private balancePageAdapter: BalancePageAdapter) { }

  ngOnInit() {
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
