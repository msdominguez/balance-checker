import { Component, OnInit } from '@angular/core';
import { BalancePageAdapter } from '@redux/balance-page/balance-page.adapter';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {
  balance$: Observable<string>;
  isCardNumberSubmitted$: Observable<boolean>;
  hasError$: Observable<boolean>;
  isCardNumberSubmittedSuccessfully$: Observable<boolean>;
  hasNoBalance$: Observable<boolean>;

  constructor(private balancePageAdapter: BalancePageAdapter) { }

  ngOnInit() {
    this.balance$ = this.balancePageAdapter.getBalance();
    this.isCardNumberSubmitted$ = this.balancePageAdapter.getIsCardNumberSubmitted();
    this.hasError$ = this.balancePageAdapter.getHasError();
    this.isCardNumberSubmittedSuccessfully$ = this.balancePageAdapter.selectIsCardNumberSubmittedSuccessfully();
    this.hasNoBalance$ = this.balancePageAdapter.selectHasNoBalance();
  }
}
